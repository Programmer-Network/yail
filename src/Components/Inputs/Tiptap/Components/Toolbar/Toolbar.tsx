import { validYouTubeUrl } from "@programmer_network/ajv";
import useAJVForm from "@programmer_network/use-ajv-form";
import classNames from "classnames";
import { RefObject, useRef } from "react";

import { useModalInput } from "../../../../../Hooks/useModalInput";
import { Button } from "../../../../Button";
import { Icon } from "../../../../Icon";
import { Tooltip } from "../../../../Tooltip";
import { TIPTAP_TOOLBAR_ITEMS } from "../../constants";
import { TiptapToolbarProps } from "../../types";
import { ModalInput } from "../ModalInput";
import { LinkClickTarget } from "../ModalInput/types";
import { TableDropdown } from "../TableDropdown";
import getToolbarIcons from "./toolbar-icons";

export const Toolbar = ({
  editor,
  toolbarItems,
  image,
  link,
  onImageUploadError
}: TiptapToolbarProps) => {
  const linkInputForm = useAJVForm(
    { link: "" },
    {
      type: "object",
      required: ["link"],
      properties: {
        link: {
          type: "string",
          format: "uri"
        }
      }
    }
  );

  const youtubeInputForm = useAJVForm(
    { youtubeUrl: "" },
    {
      type: "object",
      required: ["youtubeUrl"],
      properties: {
        youtubeUrl: {
          type: "string",
          "is-youtube-url": true
        }
      }
    },
    {
      customKeywords: [validYouTubeUrl],
      debounceTime: 1
    }
  );

  const ref = useRef<HTMLDivElement>(null);
  const inputModal = useModalInput({ ref: ref as RefObject<HTMLDivElement> });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hasSelection = !editor.state.selection.empty;

  if (!editor) {
    return null;
  }

  const insertLink = (target: LinkClickTarget) => {
    if (!linkInputForm.isValid) {
      return;
    }

    if (target === LinkClickTarget.UnLink) {
      editor.commands.unsetLink();
      inputModal.setModalId("");
      return;
    }

    editor
      .chain()
      .focus()
      .setLink({ href: linkInputForm.state.link.value })
      .run();

    inputModal.setModalId("");
  };

  const insertVideo = () => {
    if (!youtubeInputForm.isValid) {
      return;
    }

    editor.commands.setYoutubeVideo({
      src: youtubeInputForm.state.youtubeUrl.value
    });

    inputModal.setModalId("");
  };

  return (
    <div className='yl:border-border/40 yl:bg-text/1 yl:relative yl:flex yl:flex-wrap yl:items-center yl:gap-1 yl:rounded-tl-md yl:rounded-tr-md yl:border-2 yl:p-2 yl:pb-0 yl:md:gap-4 yl:md:px-4'>
      {image.isExtensionEnabled && (
        <input
          type='file'
          accept='image/*'
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={async e => {
            const file = e.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = async event => {
              const base64 = event.target?.result as string;
              try {
                await image.onSetImage?.(base64);
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
                if (onImageUploadError) {
                  onImageUploadError(
                    "Failed to upload image. Please try again."
                  );
                }
              }
            };
            reader.readAsDataURL(file);
            // Reset the input value so the same file can be uploaded again if needed
            e.target.value = "";
          }}
        />
      )}

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
              iconName: "IconAddYoutube",
              iconPosition: "right",
              iconClassName: "w-6"
            }}
            onClick={insertVideo}
          />
        </ModalInput>
      )}
      {link.isExtensionEnabled &&
        inputModal.modalId === TIPTAP_TOOLBAR_ITEMS.LINK && (
          <ModalInput
            position={inputModal.position}
            value={linkInputForm.state.link.value}
            error={linkInputForm.state.link.error}
            onChange={input => {
              linkInputForm.set({ link: input["url"] as string });
            }}
            ref={ref}
          >
            <Button
              icon={{
                iconName: "IconLink",
                iconPosition: "right",
                iconClassName: "w-6"
              }}
              onClick={() => insertLink(LinkClickTarget.Link)}
            />

            {linkInputForm.state.link.value && (
              <Button
                outlined
                onClick={() => insertLink(LinkClickTarget.UnLink)}
              >
                <Icon iconName='IconUnlink' className='yl:w-6' />
              </Button>
            )}
          </ModalInput>
        )}

      {toolbarItems?.includes(TIPTAP_TOOLBAR_ITEMS.TABLE) && (
        <TableDropdown editor={editor} isActive={editor.isActive("table")} />
      )}

      {getToolbarIcons({
        editor
      })
        .filter(i => {
          const tableOperationItems = [
            "TABLE",
            "TABLE_ADD_ROW_BEFORE",
            "TABLE_ADD_ROW_AFTER",
            "TABLE_DELETE_ROW",
            "TABLE_ADD_COLUMN_BEFORE",
            "TABLE_ADD_COLUMN_AFTER",
            "TABLE_DELETE_COLUMN",
            "TABLE_MERGE_CELLS",
            "TABLE_SPLIT_CELL",
            "TABLE_DELETE_TABLE"
          ];

          if (tableOperationItems.includes(i.id)) {
            return false;
          }

          return toolbarItems?.find(id => id === i.id);
        })
        .map(i => {
          return (
            <Tooltip
              key={i.iconName as string}
              id={`tooltip-${i.id}`}
              text={i.description || ""}
              delayShow={500}
            >
              <button
                type='button'
                disabled={typeof i.isDisabled === "function" && i.isDisabled()}
                onClick={e => {
                  if (
                    image.isExtensionEnabled &&
                    i.id === TIPTAP_TOOLBAR_ITEMS.IMAGE
                  ) {
                    fileInputRef.current?.click();
                    return;
                  }

                  if (i.id === TIPTAP_TOOLBAR_ITEMS.LINK && hasSelection) {
                    inputModal.openModal(e, TIPTAP_TOOLBAR_ITEMS.LINK);
                    linkInputForm.set({
                      link: editor.getAttributes("link")["href"] || ""
                    });
                    return;
                  }

                  if (i.id === TIPTAP_TOOLBAR_ITEMS.YOUTUBE) {
                    youtubeInputForm.set({
                      youtubeUrl: ""
                    });

                    inputModal.openModal(e, TIPTAP_TOOLBAR_ITEMS.YOUTUBE);
                    return;
                  }

                  i.onClick?.(e);
                }}
              >
                <Icon
                  iconName={i.iconName || ""}
                  className={classNames(
                    "yl:border-border yl:w-8 yl:cursor-pointer",
                    {
                      "yl:text-text": !i.isActive,
                      "yl:fill-primary yl:text-primary": i.isActive,
                      "yl:cursor-not-allowed yl:opacity-30":
                        typeof i.isDisabled === "function" && i.isDisabled(),
                      "cursor-default": !hasSelection,
                      "fill-primary": i.iconName === "IconLink" && hasSelection,
                      "w-[27px]": i.iconName === "IconStrikethrough",
                      "w-[28px]":
                        i.iconName === "IconLink" ||
                        i.iconName === "IconItalic",
                      "w-[29px]":
                        i.iconName === "IconBold" ||
                        i.iconName === "IconListOl" ||
                        i.iconName === "IconListUl",
                      "w-[26px]": i.iconName === "IconImage",
                      "w-[32px]": i.iconName === "IconLink"
                    }
                  )}
                />
              </button>
            </Tooltip>
          );
        })}
    </div>
  );
};
