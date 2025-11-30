import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import classNames from "classnames";
import { FC } from "react";

import { RoughAnnotationType } from "./RoughAnnotation.types";
import { RoughNotation } from "./RoughNotation";

const AnnotationNodeView: FC<NodeViewProps> = ({ node }) => {
  const { type, color, label, strokeWidth } = node.attrs as {
    type: RoughAnnotationType;
    color: string;
    label: string | null;
    strokeWidth: number;
  };

  const hasLabel = label !== null && label.length > 0;

  return (
    <NodeViewWrapper
      as='span'
      className={classNames(
        "rough-annotation-wrapper yl:relative yl:inline-block",
        {
          "yl:mt-6": hasLabel
        }
      )}
      data-has-label={hasLabel ? "true" : undefined}
    >
      {hasLabel && (
        <span
          className='rough-annotation-label yl:absolute yl:-top-5 yl:left-0 yl:text-xs yl:whitespace-nowrap yl:z-1'
          style={{
            fontFamily: "'Caveat', 'Patrick Hand', cursive",
            color
          }}
        >
          {label}
        </span>
      )}
      <RoughNotation
        type={type}
        color={color}
        strokeWidth={strokeWidth}
        show={true}
        animationDuration={300}
        padding={type === "circle" || type === "box" ? 4 : 2}
      >
        <span className='yl:inline'>
          <NodeViewContent className='yl:inline' />
        </span>
      </RoughNotation>
    </NodeViewWrapper>
  );
};

AnnotationNodeView.displayName = "AnnotationNodeView";

export { AnnotationNodeView };
