import { EditorContent, useEditor } from "@tiptap/react";
import classNames from "classnames";
import {
  ChangeEvent,
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef
} from "react";

import { InputError } from "../Common/InputError";
import { InputHeader } from "../Common/InputHeader";
import TiptapActions from "./Components/Actions";
import { CharacterCount } from "./Components/CharacterCount";
import { Toolbar } from "./Components/Toolbar";
import { TIPTAP_TOOLBAR_ITEMS } from "./Tiptap.constants";
import "./Tiptap.css";
import { editorConfig } from "./Tiptap.editorConfig";
import { TiptapProps, TiptapRef } from "./Tiptap.types";

const Tiptap: ForwardRefRenderFunction<TiptapRef, TiptapProps> = (
  {
    autoFocus = true,
    editorContent,
    value,
    onUpdate,
    actions,
    onTransaction,
    onSelectionUpdate,
    onSetImage,
    placeholder,
    suggestions,
    toolbarItems,
    toolbarMode = "full",
    variant = "default",
    stickyOffset,
    error = null,
    label,
    hint,
    required,
    onImageUploadError
  },
  ref
) => {
  const hasSetInitialContent = useRef(false);
  const slashMenuFileInputRef = useRef<HTMLInputElement>(null);

  // Slash menu callback for image selection
  const handleSlashMenuImageSelect = useCallback(() => {
    slashMenuFileInputRef.current?.click();
  }, []);

  const editorOptions = useMemo(() => {
    const config = editorConfig({
      toolbarItems,
      editorContent,
      suggestions,
      placeholder,
      autoFocus,
      slashMenu: {
        onImageSelect: handleSlashMenuImageSelect
      }
    });

    return {
      ...config,
      onTransaction,
      onUpdate,
      onSelectionUpdate
    };
  }, [
    toolbarItems,
    editorContent,
    suggestions,
    placeholder,
    autoFocus,
    onTransaction,
    onUpdate,
    onSelectionUpdate,
    handleSlashMenuImageSelect
  ]);

  const image = useMemo(
    () => ({
      isExtensionEnabled: !!editorOptions?.extensions?.some(
        ({ name }) => name === "image"
      ),
      onSetImage
    }),
    [editorOptions?.extensions, onSetImage]
  );

  const link = useMemo(
    () => ({
      isExtensionEnabled: !!editorOptions?.extensions?.some(
        ({ name }) => name === "link"
      )
    }),
    [editorOptions?.extensions]
  );

  const characterCountEnabled =
    toolbarItems?.includes(TIPTAP_TOOLBAR_ITEMS.CHARACTER_COUNT) ?? false;

  if (!image.isExtensionEnabled && typeof onSetImage === "function") {
    console.error(`"onSetImage" prop passed but image extension not found`);
    throw new Error("Image extension not registered in Tiptap editor.");
  }

  const editor = useEditor(editorOptions);

  // Handle image upload from slash menu
  const handleSlashMenuFileInputChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file || !editor) return;

      const reader = new FileReader();
      reader.onload = async event => {
        const base64 = event.target?.result as string;
        try {
          if (onSetImage) {
            await onSetImage(base64);
          }
          editor
            .chain()
            .focus()
            .insertContent([
              { type: "image", attrs: { src: base64 } },
              { type: "paragraph" }
            ])
            .focus("end")
            .run();
        } catch {
          onImageUploadError?.("Failed to upload image. Please try again.");
        }
      };
      reader.readAsDataURL(file);
      e.target.value = "";
    },
    [editor, onSetImage, onImageUploadError]
  );

  useImperativeHandle(
    ref,
    () => ({
      clearContent: () => {
        if (!editor) {
          return;
        }

        editor.commands.clearContent(true);
      },
      getContents: () => editor?.getHTML() ?? "",
      setContent: (content: string) => {
        if (!editor) {
          return;
        }

        editor.commands.setContent(content);
      },
      setFocus: () => {
        if (!editor) {
          return;
        }

        editor.commands.focus("end");
      }
    }),
    [editor]
  );

  useEffect(() => {
    const contentToSet = value || editorContent;

    if (contentToSet && editor && !hasSetInitialContent.current) {
      // Defer setContent to avoid flushSync warning during React render
      queueMicrotask(() => {
        try {
          const parsedContent = JSON.parse(contentToSet);
          editor.commands.setContent(parsedContent);
          hasSetInitialContent.current = true;
        } catch {
          editor.commands.setContent(contentToSet);
          hasSetInitialContent.current = true;
        }
      });
    }
  }, [value, editorContent, editor]);

  if (!editor) {
    return null;
  }

  const hasToolbar = toolbarItems && toolbarItems?.length > 0;

  // Determine sticky toolbar visibility based on mode
  const showStickyToolbar =
    hasToolbar && (toolbarMode === "full" || toolbarMode === "hybrid");

  // Bubble toolbar is always shown when there are toolbar items
  const showBubbleToolbar = hasToolbar;

  // Use minimal toolbar styling for hybrid/minimal/bubble modes
  const isMinimalToolbar =
    toolbarMode === "hybrid" ||
    toolbarMode === "minimal" ||
    toolbarMode === "bubble";

  return (
    <div
      className={classNames("yl:relative", {
        "yl:mb-8": error
      })}
    >
      {/* Hidden file input for slash menu image uploads */}
      {image.isExtensionEnabled && (
        <input
          type='file'
          accept='image/*'
          ref={slashMenuFileInputRef}
          style={{ display: "none" }}
          onChange={handleSlashMenuFileInputChange}
        />
      )}

      {label && <InputHeader label={label} hint={hint} required={required} />}
      {showStickyToolbar && (
        <Toolbar
          editor={editor}
          toolbarItems={toolbarItems}
          image={image}
          link={link}
          onImageUploadError={onImageUploadError}
          stickyOffset={stickyOffset}
          variant={variant}
        />
      )}
      {showBubbleToolbar && (
        <Toolbar
          editor={editor}
          toolbarItems={toolbarItems}
          image={image}
          link={link}
          onImageUploadError={onImageUploadError}
          mode='floating'
        />
      )}
      <div className='yl:flex yl:flex-col'>
        <div
          className={classNames("yl:relative wrap-break-word", {
            "yl:border-t-0!": showStickyToolbar
          })}
        ></div>
        <div
          className={classNames("yl:relative", {
            "yl:border-border/40 yl:rounded-br-md yl:rounded-bl-md yl:border-2 yl:border-t-0":
              showStickyToolbar && variant !== "zen",
            "yl:border-border/40 yl:rounded-md yl:border-2":
              !showStickyToolbar && !isMinimalToolbar && variant !== "zen",
            "yl:border-0":
              (isMinimalToolbar && !showStickyToolbar) || variant === "zen"
          })}
          onClick={() => editor.commands.focus()}
        >
          <EditorContent
            editor={editor}
            className={classNames({
              "yl:p-4": !isMinimalToolbar || showStickyToolbar,
              "yl:p-0": isMinimalToolbar && !showStickyToolbar
            })}
          />
          {characterCountEnabled && <CharacterCount editor={editor} />}
          {actions &&
            typeof actions?.onAction === "function" &&
            actions.buttons?.length && (
              <TiptapActions actions={actions} isEditorEmpty={editor.isEmpty} />
            )}
        </div>

        {error && <InputError error={error} />}
      </div>
    </div>
  );
};

Tiptap.displayName = "Tiptap";

const TiptapForwardRef = forwardRef(Tiptap);

export { TiptapForwardRef as Tiptap };
