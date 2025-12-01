import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import classNames from "classnames";
import { FC } from "react";

import { useCustomTaskItem } from "./CustomTaskItem.hooks";
import { getCheckedState } from "./CustomTaskItem.types";

const CustomTaskItemNodeView: FC<NodeViewProps> = ({
  node,
  updateAttributes
}) => {
  const checked = getCheckedState(node.attrs);

  const { handleCheckboxChange } = useCustomTaskItem({
    updateAttributes
  });

  return (
    <NodeViewWrapper
      as='li'
      className='yl:flex yl:items-center yl:gap-2'
      data-type='taskItem'
      data-checked={checked}
    >
      <label className='yl:relative yl:shrink-0 yl:flex yl:items-center yl:justify-center yl:cursor-pointer yl:h-6 yl:w-6'>
        <input
          type='checkbox'
          checked={checked}
          onChange={handleCheckboxChange}
          aria-label='Toggle task completion'
          className='yl:border-border yl:checked:bg-primary yl:checked:border-primary yl:focus:ring-primary yl:focus:ring-opacity-50 yl:hover:border-primary yl:h-5 yl:w-5 yl:cursor-pointer yl:appearance-none yl:border-2 yl:transition-all yl:duration-200 yl:focus:ring-2 yl:focus:outline-none yl:rounded'
        />
        {checked && (
          <svg
            className='yl:text-background yl:pointer-events-none yl:absolute yl:h-3 yl:w-3'
            fill='none'
            stroke='currentColor'
            strokeWidth='3'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5 13l4 4L19 7'
            />
          </svg>
        )}
      </label>
      <NodeViewContent
        as='div'
        className={classNames("yl:flex-1 yl:min-w-0", {
          "yl:opacity-60": checked
        })}
      />
    </NodeViewWrapper>
  );
};

CustomTaskItemNodeView.displayName = "CustomTaskItemNodeView";

export { CustomTaskItemNodeView };
