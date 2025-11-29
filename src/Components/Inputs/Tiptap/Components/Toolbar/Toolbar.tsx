import classNames from "classnames";
import { FC, MouseEvent, useCallback } from "react";

import { Button } from "../../../../Button";
import { TIPTAP_TOOLBAR_ITEMS } from "../../constants";
import { TiptapToolbarProps, ToolbarGroupId } from "../../types";
import { ImageAlignmentDropdown } from "../ImageAlignmentDropdown";
import { ModalInput } from "../ModalInput";
import { AnnotationDropdown } from "../RoughAnnotation";
import { TableDropdown } from "../TableDropdown";
import { TiptapDropdown } from "../TiptapDropdown";
import { TiptapLinkInput } from "../TiptapLinkInput";
import { ToolbarButton } from "../ToolbarButton";
import { ToolbarGroup } from "../ToolbarGroup";
import { useToolbar } from "./Toolbar.hooks";

export const Toolbar: FC<TiptapToolbarProps> = ({
  editor,
  toolbarItems,
  image,
  link,
  onImageUploadError
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

  // Handle button click for toolbar icons
  const handleIconClick = useCallback(
    (_iconId: string, onClick?: (e: MouseEvent<HTMLButtonElement>) => void) => {
      return () => {
        onClick?.({} as MouseEvent<HTMLButtonElement>);
      };
    },
    []
  );

  if (!editor) {
    return null;
  }

  // Get active typography label for dropdown trigger
  const getActiveTypographyLabel = (): string => {
    if (editor.isActive("heading", { level: 1 })) return "H1";
    if (editor.isActive("heading", { level: 2 })) return "H2";
    if (editor.isActive("heading", { level: 3 })) return "H3";
    if (editor.isActive("heading", { level: 4 })) return "H4";
    if (editor.isActive("heading", { level: 5 })) return "H5";
    if (editor.isActive("heading", { level: 6 })) return "H6";
    return "¶";
  };

  const textFormattingIcons = getGroupIcons(ToolbarGroupId.TEXT_FORMATTING);
  const blockElementIcons = getGroupIcons(ToolbarGroupId.BLOCK_ELEMENTS);

  const toolbarClasses = classNames(
    "yl:border-border/40 yl:bg-background yl:sticky yl:top-0 yl:z-10",
    "yl:flex yl:flex-wrap yl:items-center yl:rounded-tl-md yl:rounded-tr-md",
    "yl:border-2 yl:border-b-0 yl:px-2 yl:py-1.5"
  );

  return (
    <div className={toolbarClasses}>
      {/* Hidden file input for image upload */}
      {imageExtensionEnabled && (
        <input
          type='file'
          accept='image/*'
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />
      )}

      {/* YouTube URL Modal */}
      {inputModal.modalId === TIPTAP_TOOLBAR_ITEMS.YOUTUBE && (
        <ModalInput
          position={inputModal.position}
          value={youtubeInputForm.state.youtubeUrl.value}
          error={youtubeInputForm.state.youtubeUrl.error}
          onChange={input => {
            youtubeInputForm.set({ youtubeUrl: input["url"] as string });
          }}
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

      {/* Link Input - positioned near the selected text */}
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

      {/* Typography Dropdown */}
      {isGroupEnabled(ToolbarGroupId.TYPOGRAPHY) &&
        typographyDropdownItems.length > 0 && (
          <ToolbarGroup>
            <TiptapDropdown
              triggerIcon='ParagraphOutline'
              triggerLabel={getActiveTypographyLabel()}
              items={typographyDropdownItems}
              isActive={editor.isActive("heading")}
              tooltipText='Text style'
            />
          </ToolbarGroup>
        )}

      {/* Text Formatting Group */}
      {isGroupEnabled(ToolbarGroupId.TEXT_FORMATTING) &&
        textFormattingIcons.length > 0 && (
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
          </ToolbarGroup>
        )}

      {/* Lists Dropdown */}
      {isGroupEnabled(ToolbarGroupId.LISTS) &&
        listsDropdownItems.length > 0 && (
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

      {/* Block Elements Group */}
      {isGroupEnabled(ToolbarGroupId.BLOCK_ELEMENTS) &&
        blockElementIcons.length > 0 && (
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

      {/* Insert Dropdown */}
      {insertDropdownItems.length > 0 && (
        <ToolbarGroup>
          <TiptapDropdown
            triggerIcon='AddOutline'
            items={insertDropdownItems}
            tooltipText='Insert'
          />
        </ToolbarGroup>
      )}

      {/* Rough Annotation */}
      {isItemEnabled(TIPTAP_TOOLBAR_ITEMS.ROUGH_ANNOTATION) && (
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

      {/* Table Controls (contextual - when inside table) */}
      {isItemEnabled(TIPTAP_TOOLBAR_ITEMS.TABLE) &&
        editor.isActive("table") && (
          <ToolbarGroup>
            <TableDropdown
              editor={editor}
              isActive={editor.isActive("table")}
            />
          </ToolbarGroup>
        )}

      {/* Image Alignment (contextual - when image selected) */}
      {isItemEnabled(TIPTAP_TOOLBAR_ITEMS.IMAGE) && (
        <ToolbarGroup>
          <ImageAlignmentDropdown editor={editor} />
        </ToolbarGroup>
      )}
    </div>
  );
};
