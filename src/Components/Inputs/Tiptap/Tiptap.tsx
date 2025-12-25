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
  useRef,
  useState
} from "react";

import { Icon } from "../../Icon";
import { Tooltip } from "../../Tooltip";
import { InputError } from "../Common/InputError";
import { InputHeader } from "../Common/InputHeader";
import TiptapActions from "./Components/Actions";
import { CharacterCount } from "./Components/CharacterCount";
import { isSlashMenuEnabled } from "./Components/SlashMenu";
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
    variant = "default",
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
  const [isFocused, setIsFocused] = useState(false);

  // Check if slash menu is enabled
  const slashMenuEnabled = useMemo(
    () => isSlashMenuEnabled(toolbarItems),
    [toolbarItems]
  );

  // Slash menu callback for image selection
  const handleSlashMenuImageSelect = useCallback(() => {
    slashMenuFileInputRef.current?.click();
  }, []);

  // Enhanced placeholder that mentions slash menu when enabled
  const enhancedPlaceholder = useMemo(() => {
    if (placeholder) {
      return placeholder;
    }

    if (slashMenuEnabled) {
      return "Type / for commands or start writing...";
    }

    return "Start writing...";
  }, [placeholder, slashMenuEnabled]);

  const editorOptions = useMemo(() => {
    const config = editorConfig({
      toolbarItems,
      editorContent,
      suggestions,
      placeholder: enhancedPlaceholder,
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
    enhancedPlaceholder,
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

  // Build tooltip text for hints
  const hintsTooltipText = useMemo(() => {
    const hints: string[] = [];
    if (slashMenuEnabled) {
      hints.push("Type / (slash) for commands");
    }
    hints.push("Select text for formatting");
    return hints.join(" • ");
  }, [slashMenuEnabled]);

  if (!image.isExtensionEnabled && typeof onSetImage === "function") {
    console.error(`"onSetImage" prop passed but image extension not found`);
    throw new Error("Image extension not registered in Tiptap editor.");
  }

  const editor = useEditor(editorOptions);

  // Track focus state
  useEffect(() => {
    if (!editor) {
      return;
    }

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    editor.on("focus", handleFocus);
    editor.on("blur", handleBlur);

    return () => {
      editor.off("focus", handleFocus);
      editor.off("blur", handleBlur);
    };
  }, [editor]);

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

  // Bubble toolbar is always shown when there are toolbar items
  const showBubbleToolbar = hasToolbar;

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
          className={classNames("yl:relative", {
            "yl:border-border/40 yl:rounded-md yl:border": variant !== "zen",
            "yl:border-0": variant === "zen"
          })}
          onClick={() => editor.commands.focus()}
        >
          <EditorContent
            editor={editor}
            className={classNames({
              "yl:p-4": variant !== "zen"
            })}
          />
          {/* Visual hints for discoverability */}
          {editor.isEmpty && isFocused && hasToolbar && (
            <div className='yl:absolute yl:top-3 yl:right-2 yl:z-10 yl:cursor-help'>
              <Tooltip
                text={hintsTooltipText}
                id='tiptap-hints-tooltip'
                place='left'
              >
                <Icon
                  iconName='QuestionSolid'
                  className='yl:w-4 yl:h-4 yl:text-text/60 yl:hover:text-text/60 yl:cursor-help yl:transition-colors'
                />
              </Tooltip>
            </div>
          )}
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
