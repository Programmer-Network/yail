import { FC, useEffect, useRef } from "react";
import { annotate } from "rough-notation";

import { IRoughNotationProps } from "./RoughAnnotation.types";

type AnnotationInstance = ReturnType<typeof annotate>;

const RoughNotation: FC<IRoughNotationProps> = ({
  type,
  color = "#3b82f6",
  strokeWidth = 2,
  padding = 2,
  animationDuration = 400,
  show = true,
  children
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<AnnotationInstance | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    // Create the annotation instance
    annotationRef.current = annotate(containerRef.current, {
      type,
      color,
      strokeWidth,
      padding,
      animationDuration
    });

    // Show the annotation if show is true
    if (show) {
      annotationRef.current.show();
    }

    // Cleanup on unmount
    return () => {
      if (annotationRef.current) {
        annotationRef.current.remove();
        annotationRef.current = null;
      }
    };
  }, [type, color, strokeWidth, padding, animationDuration, show]);

  // Handle show/hide changes
  useEffect(() => {
    if (!annotationRef.current) {
      return;
    }

    if (show) {
      annotationRef.current.show();
    } else {
      annotationRef.current.hide();
    }
  }, [show]);

  return (
    <span ref={containerRef} className='yl:inline'>
      {children}
    </span>
  );
};

RoughNotation.displayName = "RoughNotation";

export { RoughNotation };
