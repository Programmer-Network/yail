import classNames from "classnames";
import {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle
} from "react";

import { Tiptap } from "../Inputs/Tiptap";
import { DEFAULT_PLACEHOLDER } from "./ZenEditor.constants";
import { useZenEditorKeyboard, useZenEditorRef } from "./ZenEditor.hooks";
import { IZenEditorProps, IZenEditorRef } from "./ZenEditor.types";
import { ZenPropertiesDrawer } from "./ZenPropertiesDrawer";
import { ZenStatusBar } from "./ZenStatusBar";

const ZenEditorComponent: ForwardRefRenderFunction<
  IZenEditorRef,
  IZenEditorProps
> = (
  {
    value,
    onUpdate,
    toolbarItems,
    placeholder = DEFAULT_PLACEHOLDER,
    editorRef: externalEditorRef,
    suggestions,
    onSetImage,
    onImageUploadError,
    propertiesDrawer,
    statusBar,
    className,
    contentClassName,
    autoFocus = true
  },
  ref
) => {
  const { editorRef } = useZenEditorRef({ externalEditorRef });

  useZenEditorKeyboard({
    propertiesDrawer,
    primaryAction: statusBar.primaryAction
  });

  useImperativeHandle(
    ref,
    () => ({
      clearContent: () => editorRef.current?.clearContent(),
      getContents: () => editorRef.current?.getContents(),
      setContent: (content: string) => editorRef.current?.setContent(content),
      setFocus: () => editorRef.current?.setFocus(),
      getEditor: () => null
    }),
    [editorRef]
  );

  const containerClasses = classNames(
    "yl:flex yl:flex-col yl:min-h-screen yl:bg-background",
    className
  );

  const contentClasses = classNames(
    "yl:flex-1 yl:flex yl:justify-center yl:px-4 yl:py-8 yl:md:px-8 yl:lg:px-12",
    contentClassName
  );

  const editorWrapperClasses = classNames(
    "yl:w-full yl:max-w-3xl",
    "yl:prose yl:prose-lg yl:max-w-none",
    "zen-editor-content"
  );

  return (
    <div className={containerClasses}>
      <ZenStatusBar
        saveStatus={statusBar.saveStatus}
        onPropertiesToggle={propertiesDrawer.onToggle}
        isPropertiesOpen={propertiesDrawer.isOpen}
      />

      <div className={contentClasses}>
        <div className={editorWrapperClasses}>
          <Tiptap
            ref={editorRef}
            value={value}
            onUpdate={onUpdate}
            toolbarItems={toolbarItems}
            variant='zen'
            placeholder={placeholder}
            suggestions={suggestions}
            onSetImage={onSetImage}
            onImageUploadError={onImageUploadError}
            autoFocus={autoFocus}
          />
        </div>
      </div>

      <ZenPropertiesDrawer
        isOpen={propertiesDrawer.isOpen}
        onClose={propertiesDrawer.onToggle}
        title={propertiesDrawer.title}
        primaryAction={statusBar.primaryAction}
        secondaryAction={statusBar.secondaryAction}
      >
        {propertiesDrawer.children}
      </ZenPropertiesDrawer>
    </div>
  );
};

ZenEditorComponent.displayName = "ZenEditor";

const ZenEditor = forwardRef(ZenEditorComponent);

export { ZenEditor };
