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
    <ul className='border-text/20 bg-background text-text flex max-h-60 min-w-[150px] flex-col gap-2 overflow-y-auto rounded-xs border p-2 shadow-lg'>
      {props.items.map((item, index) => (
        <li
          data-label={item.label}
          className={classNames("rounded-xs p-1", {
            "text-primary bg-text/5": index === selectedIndex
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
