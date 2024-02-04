import classNames from "classnames";
import React, { forwardRef, useImperativeHandle, useState } from "react";

import { IMentionProps, MentionHandle } from "../../types";

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
    <ul className='flex max-h-60 min-w-[150px] flex-col gap-2 overflow-y-auto bg-primary-background-color py-2 pl-4 text-primary-text-color shadow-lg'>
      {props.items.map((item, index) => (
        <li
          data-label={item.label}
          className={classNames({
            "text-primary": index === selectedIndex
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
