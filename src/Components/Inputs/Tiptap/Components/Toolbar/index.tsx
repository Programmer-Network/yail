import useAJVForm from "@programmer_network/use-ajv-form";
import { useOnClickOutside } from "Hooks/useClickOutside";
import classNames from "classnames";
import { useRef, useState } from "react";

import Dialog from "Components/Dialog/Dialog";
import Icon from "Components/Icon";
import { IconName } from "Components/Icons/types";

import { TIPTAP_TOOLBAR_ITEMS } from "../../constants";
import { TiptapToolbarProps } from "../../types";
import ImageUpload from "../ImageUpload";
import { LinkInput } from "../LinkInput";
import { LinkClickTarget } from "../LinkInput/types";
import getToolbarIcons from "./toolbar-icons";

export const Toolbar = ({
  editor,
  toolbarItems,
  image
}: TiptapToolbarProps) => {
  const form = useAJVForm(
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputWrapperRef = useRef(null);

  useOnClickOutside(inputWrapperRef, () => setIsLinkInputShown(false));

  const hasSelection = !editor.state.selection.empty;

  const [isLinkInputShown, setIsLinkInputShown] = useState<boolean>(false);
  const [linkInputPosition, setLinkInputPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0
  });

  if (!editor) {
    return null;
  }

  const handleOpenLinkInput = () => {
    const { left, top } = document
      .getSelection()
      ?.getRangeAt(0)
      .getBoundingClientRect() as DOMRect;

    setLinkInputPosition({ x: left, y: top + 25 });
    setIsLinkInputShown(!isLinkInputShown);
    form.set({ link: editor.getAttributes("link").href || "" });
  };

  const handleInsertLink = (target: LinkClickTarget) => {
    if (!form.isValid) {
      return;
    }

    if (target === LinkClickTarget.UnLink) {
      editor.commands.unsetLink();
      setIsLinkInputShown(false);
      return;
    }

    editor.chain().focus().setLink({ href: form.state.link.value }).run();
    setIsLinkInputShown(false);
  };

  return (
    <div className='flex flex-wrap'>
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

      {isLinkInputShown && (
        <LinkInput
          position={linkInputPosition}
          value={form.state.link.value}
          error={form.state.link.error}
          onClick={handleInsertLink}
          onChange={input => {
            form.set({ link: input.url });
          }}
          ref={inputWrapperRef}
        />
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

                if (i.id === TIPTAP_TOOLBAR_ITEMS.LINK) {
                  handleOpenLinkInput();
                  return;
                }

                i.onClick?.(e);
              }}
            >
              <Icon
                iconName={i.iconName as IconName}
                className={classNames("w-8", {
                  "text-primary-text-color": !i.isActive,
                  "text-primary": i.isActive || hasSelection,
                  "cursor-not-allowed":
                    typeof i.isDisabled === "function" && i.isDisabled(),
                  "cursor-default": !hasSelection,
                  "fill-primary": i.iconName === "IconLink" && hasSelection
                })}
              />
            </button>
          );
        })}
    </div>
  );
};
