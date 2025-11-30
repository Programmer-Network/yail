import { EditorContent, useEditor } from "@tiptap/react";
import classNames from "classnames";
import {
  ForwardRefRenderFunction,
  forwardRef,
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

  const editorOptions = useMemo(() => {
    const config = editorConfig({
      toolbarItems,
      editorContent,
      suggestions,
      placeholder,
      autoFocus
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
    onSelectionUpdate
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
      try {
        const parsedContent = JSON.parse(contentToSet);
        editor.commands.setContent(parsedContent);
        hasSetInitialContent.current = true;
      } catch {
        editor.commands.setContent(contentToSet);
        hasSetInitialContent.current = true;
      }
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
