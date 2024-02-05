import classNames from "classnames";
import { useRef } from "react";

import Dialog from "Components/Dialog/Dialog";
import Icon from "Components/Icon";
import { IconName } from "Components/Icons/types";

import { TIPTAP_TOOLBAR_ITEMS } from "../../constants";
import { TiptapToolbarProps } from "../../types";
import ImageUpload from "../ImageUpload";
import getToolbarIcons from "./toolbar-icons";

export const Toolbar = ({
  editor,
  toolbarItems,
  image
}: TiptapToolbarProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  if (!editor) {
    return null;
  }

  return (
    <div className='flex flex-wrap'>
      {image.isExtensionActive && (
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
                  image.isExtensionActive &&
                  i.id === TIPTAP_TOOLBAR_ITEMS.IMAGE
                ) {
                  dialogRef.current?.showModal();
                }

                i.onClick?.(e);
              }}
            >
              <Icon
                iconName={i.iconName as IconName}
                className={classNames("w-8", {
                  "text-primary-text-color": !i.isActive,
                  "text-primary": i.isActive,
                  "cursor-not-allowed":
                    typeof i.isDisabled === "function" && i.isDisabled()
                })}
              />
            </button>
          );
        })}
    </div>
  );
};
