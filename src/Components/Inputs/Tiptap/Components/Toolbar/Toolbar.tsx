import { BubbleMenu } from "@tiptap/react/menus";
import classNames from "classnames";
import { FC, MouseEvent, useCallback } from "react";

import { Button } from "../../../../Button";
import { TIPTAP_TOOLBAR_ITEMS } from "../../Tiptap.constants";
import { TiptapToolbarProps, ToolbarGroupId } from "../../Tiptap.types";
import { CalloutDropdown } from "../CalloutDropdown";
import { ColorDropdown } from "../ColorDropdown";
import { ImageAlignmentDropdown } from "../ImageAlignmentDropdown";
import { ModalInput } from "../ModalInput";
import { AnnotationDropdown } from "../RoughAnnotation";
import { TableDropdown } from "../TableDropdown";
import { TiptapDropdown } from "../TiptapDropdown";
import { TiptapLinkInput } from "../TiptapLinkInput";
import { ToolbarButton } from "../ToolbarButton";
import { ToolbarGroup } from "../ToolbarGroup";
import { BUBBLE_MENU_OPTIONS } from "./Toolbar.constants";
import { useToolbar } from "./Toolbar.hooks";
import { IToolbarWrapperProps } from "./Toolbar.types";
import { getActiveTypographyLabel } from "./Toolbar.utils";

const ToolbarWrapper: FC<IToolbarWrapperProps> = ({
  mode,
  editor,
  children,
  className,
  style
}) => {
  const handleShouldShow = useCallback(
    ({ from, to }: { from: number; to: number }) => {
      const isEmptySelection = from === to;
      const isCodeBlock = editor.isActive("codeBlock");
      const isImage = editor.isActive("image");
      return !isEmptySelection && !isCodeBlock && !isImage;
    },
    [editor]
  );

  if (mode === "floating") {
    return (
      <BubbleMenu
        editor={editor}
        options={BUBBLE_MENU_OPTIONS}
        shouldShow={handleShouldShow}
      >
        <div className={className} style={style}>
          {children}
        </div>
      </BubbleMenu>
    );
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

ToolbarWrapper.displayName = "ToolbarWrapper";

export const Toolbar: FC<TiptapToolbarProps> = ({
  editor,
  toolbarItems,
  image,
  link,
  onImageUploadError,
  variant = "default",
  mode = "static"
}) => {
  const {
    ref,
    fileInputRef,
    isAnnotationDropdownOpen,
    isLinkInputOpen,
    linkInputPosition,
    hasExistingAnnotation,
    linkInputForm,
    youtubeInputForm,
    inputModal,
    typographyDropdownItems,
    listsDropdownItems,
    insertDropdownItems,
    insertVideo,
    handleFileInputChange,
    handleApplyAnnotation,
    handleRemoveAnnotation,
    handleCloseAnnotationDropdown,
    handleToggleAnnotationDropdown,
    handleCloseLinkInput,
    handleLinkInputChange,
    handleLinkSubmit,
    handleUnlink,
    isItemEnabled,
    isGroupEnabled,
    getGroupIcons,
    imageExtensionEnabled
  } = useToolbar({
    editor,
    toolbarItems,
    image,
    link,
    onImageUploadError
  });

  const handleIconClick = useCallback(
    (_iconId: string, onClick?: (e: MouseEvent<HTMLButtonElement>) => void) => {
      return () => {
        onClick?.({} as MouseEvent<HTMLButtonElement>);
      };
    },
    []
  );

  const handleYoutubeUrlChange = useCallback(
    (input: Record<string, unknown>) => {
      youtubeInputForm.set({ youtubeUrl: input["url"] as string });
    },
    [youtubeInputForm]
  );

  if (!editor || !editor.view) {
    return null;
  }

  const activeTypographyLabel = getActiveTypographyLabel(editor);
  const textFormattingIcons = getGroupIcons(
    ToolbarGroupId.TEXT_FORMATTING
  ).filter(icon => icon.id !== TIPTAP_TOOLBAR_ITEMS.COLOR);

  const blockElementIcons = getGroupIcons(ToolbarGroupId.BLOCK_ELEMENTS);
  const isColorEnabled = isItemEnabled(TIPTAP_TOOLBAR_ITEMS.COLOR);

  const isZen = variant === "zen";
  const isFloating = mode === "floating";

  const toolbarClasses = classNames(
    "yl:flex yl:flex-wrap yl:items-center yl:px-2 yl:py-1.5",
    {
      "yl:bg-background yl:sticky yl:z-10": !isFloating,
      "yl:top-0": !isFloating,
      "yl:border-border/40 yl:border yl:border-b-0 yl:rounded-tl-md yl:rounded-tr-md":
        !isFloating && !isZen,
      "yl:border-b yl:border-border/20": !isFloating && isZen,
      // Floating bubble menu - more prominent styling
      "yl:bg-background/95 yl:backdrop-blur-sm yl:rounded-lg yl:border yl:border-primary/30 yl:shadow-2xl yl:shadow-black/30 yl:gap-0.5 [&]:!z-[9999]":
        isFloating
    }
  );

  const toolbarStyle = undefined;

  const isTypographyEnabled =
    isGroupEnabled(ToolbarGroupId.TYPOGRAPHY) &&
    typographyDropdownItems.length > 0;

  const isTextFormattingEnabled =
    isGroupEnabled(ToolbarGroupId.TEXT_FORMATTING) &&
    textFormattingIcons.length > 0;

  const isListsEnabled =
    isGroupEnabled(ToolbarGroupId.LISTS) && listsDropdownItems.length > 0;

  const isBlockElementsEnabled =
    isGroupEnabled(ToolbarGroupId.BLOCK_ELEMENTS) &&
    blockElementIcons.length > 0;

  const isInsertEnabled = insertDropdownItems.length > 0;

  const isAnnotationEnabled = isItemEnabled(
    TIPTAP_TOOLBAR_ITEMS.ROUGH_ANNOTATION
  );
  const isCalloutEnabled = isItemEnabled(TIPTAP_TOOLBAR_ITEMS.CALLOUT);
  const isTableEnabled =
    isItemEnabled(TIPTAP_TOOLBAR_ITEMS.TABLE) && editor.isActive("table");

  const isImageEnabled = isItemEnabled(TIPTAP_TOOLBAR_ITEMS.IMAGE);

  const isYoutubeModalOpen =
    inputModal.modalId === TIPTAP_TOOLBAR_ITEMS.YOUTUBE;

  return (
    <ToolbarWrapper
      mode={mode}
      editor={editor}
      className={toolbarClasses}
      style={toolbarStyle}
    >
      {imageExtensionEnabled && (
        <input
          type='file'
          accept='image/*'
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />
      )}

      {isYoutubeModalOpen && (
        <ModalInput
          position={inputModal.position}
          value={youtubeInputForm.state.youtubeUrl.value}
          error={youtubeInputForm.state.youtubeUrl.error}
          onChange={handleYoutubeUrlChange}
          ref={ref}
        >
          <Button
            outlined
            icon={{
              iconName: "YoutubeOutline",
              iconPosition: "left",
              iconClassName: "yl:w-5"
            }}
            onClick={insertVideo}
          />
        </ModalInput>
      )}

      {link.isExtensionEnabled && (
        <TiptapLinkInput
          isOpen={isLinkInputOpen}
          onClose={handleCloseLinkInput}
          value={linkInputForm.state.link.value}
          error={linkInputForm.state.link.error}
          onChange={handleLinkInputChange}
          onSubmit={handleLinkSubmit}
          onUnlink={handleUnlink}
          hasExistingLink={editor.isActive("link")}
          anchorPosition={linkInputPosition || undefined}
        />
      )}

      {isTypographyEnabled && (
        <ToolbarGroup>
          <TiptapDropdown
            triggerIcon='ParagraphOutline'
            triggerLabel={activeTypographyLabel}
            items={typographyDropdownItems}
            isActive={editor.isActive("heading")}
            tooltipText='Text style'
          />
        </ToolbarGroup>
      )}

      {isTextFormattingEnabled && (
        <ToolbarGroup>
          {textFormattingIcons.map(icon => (
            <ToolbarButton
              key={icon.id}
              icon={icon.iconName || ""}
              onClick={handleIconClick(icon.id, icon.onClick)}
              isActive={icon.isActive}
              isDisabled={
                typeof icon.isDisabled === "function"
                  ? icon.isDisabled()
                  : false
              }
              tooltipText={icon.description}
              tooltipId={`tooltip-${icon.id}`}
            />
          ))}
          {isColorEnabled && <ColorDropdown editor={editor} />}
        </ToolbarGroup>
      )}

      {isListsEnabled && (
        <ToolbarGroup>
          <TiptapDropdown
            triggerIcon='ListUnorderedOutline'
            items={listsDropdownItems}
            isActive={
              editor.isActive("bulletList") ||
              editor.isActive("orderedList") ||
              editor.isActive("taskList")
            }
            tooltipText='Lists'
          />
        </ToolbarGroup>
      )}

      {isBlockElementsEnabled && (
        <ToolbarGroup>
          {blockElementIcons.map(icon => (
            <ToolbarButton
              key={icon.id}
              icon={icon.iconName || ""}
              onClick={handleIconClick(icon.id, icon.onClick)}
              isActive={icon.isActive}
              isDisabled={
                typeof icon.isDisabled === "function"
                  ? icon.isDisabled()
                  : false
              }
              tooltipText={icon.description}
              tooltipId={`tooltip-${icon.id}`}
            />
          ))}
        </ToolbarGroup>
      )}

      {isCalloutEnabled && (
        <ToolbarGroup>
          <CalloutDropdown editor={editor} />
        </ToolbarGroup>
      )}

      {isInsertEnabled && (
        <ToolbarGroup>
          <TiptapDropdown
            triggerIcon='AddOutline'
            items={insertDropdownItems}
            tooltipText='Insert'
          />
        </ToolbarGroup>
      )}

      {isAnnotationEnabled && (
        <ToolbarGroup>
          <div className='yl:relative'>
            <ToolbarButton
              icon='IconPencilSquare'
              onClick={handleToggleAnnotationDropdown}
              isActive={editor.isActive("roughAnnotation")}
              tooltipText='Add hand-drawn annotation'
              tooltipId='tooltip-rough-annotation'
            />
            <AnnotationDropdown
              isOpen={isAnnotationDropdownOpen}
              hasExistingAnnotation={hasExistingAnnotation}
              onApply={handleApplyAnnotation}
              onRemove={handleRemoveAnnotation}
              onClose={handleCloseAnnotationDropdown}
            />
          </div>
        </ToolbarGroup>
      )}

      {isTableEnabled && (
        <ToolbarGroup>
          <TableDropdown editor={editor} isActive={editor.isActive("table")} />
        </ToolbarGroup>
      )}

      {isImageEnabled && (
        <ToolbarGroup>
          <ImageAlignmentDropdown editor={editor} />
        </ToolbarGroup>
      )}
    </ToolbarWrapper>
  );
};

Toolbar.displayName = "Toolbar";
