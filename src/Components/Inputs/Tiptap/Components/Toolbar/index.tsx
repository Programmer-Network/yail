import useAJVForm from "@programmer_network/use-ajv-form";
import { useModalInput } from "Hooks/useModalInput";
import classNames from "classnames";
import programmerNetworkAjv from "programmer-network-ajv";
import { useRef } from "react";

import Button from "Components/Button";
import Dialog from "Components/Dialog/Dialog";
import Icon from "Components/Icon";
import { IconName } from "Components/Icons/types";

import { TIPTAP_TOOLBAR_ITEMS } from "../../constants";
import { TiptapToolbarProps } from "../../types";
import ImageUpload from "../ImageUpload";
import { ModalInput } from "../ModalInput";
import { LinkClickTarget } from "../ModalInput/types";
import getToolbarIcons from "./toolbar-icons";

const { keywords } = programmerNetworkAjv;

export const Toolbar = ({
  editor,
  toolbarItems,
  image,
  link
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
      customKeywords: keywords,
      debounceTime: 1
    }
  );

  const dialogRef = useRef<HTMLDialogElement>(null);
  const ref = useRef(null);
  const inputModal = useModalInput({ ref });

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
    <div className='flex flex-wrap gap-3 border-2 border-b-0 border-primary-text-color bg-primary-text-color px-4 py-1'>
      {image.isExtensionEnabled && (
        <Dialog ref={dialogRef}>
          <ImageUpload
            onFileLoaded={async data => {
              try {
                await image.onSetImage?.(data.base64);
                editor.chain().focus().setImage({ src: data.base64 }).run();
                dialogRef.current?.close();
              } catch (error) {
                console.log(error);
              }
            }}
          />
        </Dialog>
      )}

      {inputModal.modalId === TIPTAP_TOOLBAR_ITEMS.YOUTUBE && (
        <ModalInput
          position={inputModal.position}
          value={youtubeInputForm.state.youtubeUrl.value}
          error={youtubeInputForm.state.youtubeUrl.error}
          onChange={input => {
            youtubeInputForm.set({ youtubeUrl: input.url });
          }}
          ref={ref}
        >
          <Button onClick={insertVideo}>
            <Icon iconName='IconAddYoutube' className='w-6' />
          </Button>
        </ModalInput>
      )}
      {link.isExtensionEnabled &&
        inputModal.modalId === TIPTAP_TOOLBAR_ITEMS.LINK && (
          <ModalInput
            position={inputModal.position}
            value={linkInputForm.state.link.value}
            error={linkInputForm.state.link.error}
            onChange={input => {
              linkInputForm.set({ link: input.url });
            }}
            ref={ref}
          >
            <Button onClick={() => insertLink(LinkClickTarget.Link)}>
              <Icon iconName='IconLink' className='w-6' />
            </Button>

            {linkInputForm.state.link.value && (
              <Button
                outlined
                onClick={() => insertLink(LinkClickTarget.UnLink)}
              >
                <Icon iconName='IconUnlink' className='w-6' />
              </Button>
            )}
          </ModalInput>
        )}

      {getToolbarIcons({
        editor
      })
        .filter(i => {
          if (!toolbarItems.length) {
            return true;
          }

          return toolbarItems.find(id => id === i.id);
        })
        .map(i => {
          return (
            <button
              key={i.iconName}
              type='button'
              onClick={e => {
                if (
                  image.isExtensionEnabled &&
                  i.id === TIPTAP_TOOLBAR_ITEMS.IMAGE
                ) {
                  dialogRef.current?.showModal();
                  return;
                }

                if (i.id === TIPTAP_TOOLBAR_ITEMS.LINK && hasSelection) {
                  inputModal.openModal(e, TIPTAP_TOOLBAR_ITEMS.LINK);
                  linkInputForm.set({
                    link: editor.getAttributes("link").href || ""
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
                iconName={i.iconName as IconName}
                className={classNames("w-10 !text-primary-background-color", {
                  "text-primary-text-color": !i.isActive,
                  "!fill-primary !text-primary": i.isActive,
                  "cursor-not-allowed":
                    typeof i.isDisabled === "function" && i.isDisabled(),
                  "cursor-default": !hasSelection,
                  "fill-primary": i.iconName === "IconLink" && hasSelection,
                  "w-[34px]":
                    i.iconName === "IconLink" || i.iconName === "IconItalic",
                  "w-[36px]": i.iconName === "IconBold",
                  "w-[31px]": i.iconName === "IconImage",
                  "w-[40px]": i.iconName === "IconLink"
                })}
              />
            </button>
          );
        })}
    </div>
  );
};
