import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import classNames from "classnames";
import { FC } from "react";

import { Icon } from "../../../../Icon";
import {
  CalloutType,
  getCalloutConfig,
  isValidCalloutType
} from "./Callout.types";

const CalloutNodeView: FC<NodeViewProps> = ({ node }) => {
  const typeAttr = node.attrs["type"] as string;
  const type = isValidCalloutType(typeAttr) ? typeAttr : CalloutType.NOTE;
  const config = getCalloutConfig(type);

  return (
    <NodeViewWrapper
      className={classNames(
        "callout-wrapper",
        "yl:my-4 yl:w-full yl:rounded-r-md yl:border-l-4 yl:p-4",
        config.borderColor,
        config.backgroundColor
      )}
      data-type='callout'
      data-callout-type={type}
    >
      <div
        className={classNames(
          "callout-header",
          "yl:mb-2 yl:flex yl:items-center yl:gap-2 yl:font-semibold yl:uppercase",
          config.headerColor
        )}
        contentEditable={false}
      >
        <Icon iconName={config.icon} className='yl:h-5 yl:w-5' />
        <span>{config.label}</span>
      </div>
      <NodeViewContent
        className={classNames(
          "callout-content",
          "yl:prose yl:prose-sm yl:max-w-none",
          "[&>*:first-child]:yl:mt-0 [&>*:last-child]:yl:mb-0"
        )}
      />
    </NodeViewWrapper>
  );
};

CalloutNodeView.displayName = "CalloutNodeView";

export { CalloutNodeView };
