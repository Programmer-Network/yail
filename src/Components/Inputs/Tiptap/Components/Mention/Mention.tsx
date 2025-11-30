import classNames from "classnames";
import React, { forwardRef, useImperativeHandle, useState } from "react";

import { IMentionProps, MentionHandle } from "../../Tiptap.types";

const Mention: React.ForwardRefRenderFunction<MentionHandle, IMentionProps> = (
  props,
  ref
) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectItem = (index: number) => {
    const item = props.items[index];
    if (!item) {
      return;
    }

    props.command({ id: item.value, label: item.label });
  };

  const upHandler = () => {
    setSelectedIndex(
      (selectedIndex + props.items.length - 1) % props.items.length
    );
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }: { event: KeyboardEvent }) => {
      if (event.key === "ArrowUp") {
        upHandler();
        return true;
      }

      if (event.key === "ArrowDown") {
        downHandler();
        return true;
      }

      if (event.key === "Enter") {
        enterHandler();
        return true;
      }

      return false;
    }
  }));

  return (
    <ul className='yl:border-text/20 yl:bg-background yl:text-text yl:flex yl:max-h-60 yl:min-w-[150px] yl:flex-col yl:gap-2 yl:overflow-y-auto yl:rounded-xs yl:p-2 yl:shadow-lg yl:border'>
      {props.items.map((item, index) => (
        <li
          data-label={item.label}
          className={classNames("yl:rounded-xs yl:p-1", {
            "yl:text-primary yl:bg-text/5": index === selectedIndex
          })}
          key={index}
          onClick={() => selectItem(index)}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default forwardRef(Mention);
