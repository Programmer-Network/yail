import classNames from "classnames";

import Icon from "Components/Icon";
import { IconName } from "Components/Icons/types";

import { TiptapToolbarProps } from "../../types";
import getToolbarIcons from "./toolbar-icons";

export const Toolbar = ({ editor, toolbarItems }: TiptapToolbarProps) => {
  if (!editor) {
    return null;
  }

  return (
    <div className='flex flex-wrap'>
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
            <button key={i.iconName} type='button' onClick={i.onClick}>
              <Icon
                iconName={i.iconName as IconName}
                className={classNames("w-8", {
                  "fill-primary-text-color": !i.isActive,
                  "fill-primary": i.isActive,
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
