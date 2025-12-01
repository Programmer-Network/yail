import { NodeViewProps } from "@tiptap/react";
import { ChangeEvent } from "react";

/**
 * Attributes stored on the taskItem node
 */
export interface ITaskItemAttrs {
  checked: boolean;
}

/**
 * Options for the CustomTaskItem extension
 */
export interface ICustomTaskItemOptions {
  nested: boolean;
  HTMLAttributes: Record<string, unknown>;
}

/**
 * Props for the CustomTaskItem NodeView component
 */
export interface ICustomTaskItemNodeViewProps extends NodeViewProps {
  node: NodeViewProps["node"] & {
    attrs: ITaskItemAttrs;
  };
}

/**
 * Props for useCustomTaskItem hook
 */
export interface IUseCustomTaskItemProps {
  updateAttributes: (attrs: { checked: boolean }) => void;
}

/**
 * Return type for useCustomTaskItem hook
 */
export interface IUseCustomTaskItemReturn {
  handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Safely extract checked state from node attrs
 */
export const getCheckedState = (attrs: Record<string, unknown>): boolean => {
  return attrs["checked"] === true;
};
