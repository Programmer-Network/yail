import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import classNames from "classnames";
import { FC, useCallback, useEffect, useRef, useState } from "react";

import { IResizableImageAttrs, ImageAlignment } from "./ResizableImage.types";

interface IResizeState {
  isResizing: boolean;
  startX: number;
  startY: number;
  startWidth: number;
  startHeight: number;
  aspectRatio: number;
}

const ResizableImageNodeView: FC<NodeViewProps> = ({
  node,
  updateAttributes,
  selected
}) => {
  const attrs = node.attrs as IResizableImageAttrs;
  const { src, alt, title, width, height } = attrs;
  const alignment = (attrs["data-align"] || "center") as ImageAlignment;

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const [resizeState, setResizeState] = useState<IResizeState>({
    isResizing: false,
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
    aspectRatio: 1
  });

  const [currentSize, setCurrentSize] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: typeof width === "number" ? width : null,
    height: typeof height === "number" ? height : null
  });

  // Initialize size from natural image dimensions when loaded
  const handleImageLoad = useCallback(() => {
    if (imageRef.current && !currentSize.width) {
      const naturalWidth = imageRef.current.naturalWidth;
      const naturalHeight = imageRef.current.naturalHeight;
      const maxWidth = containerRef.current?.parentElement?.clientWidth || 800;

      // Scale down if image is wider than container
      if (naturalWidth > maxWidth) {
        const scale = maxWidth / naturalWidth;
        setCurrentSize({
          width: Math.round(naturalWidth * scale),
          height: Math.round(naturalHeight * scale)
        });
      }
    }
  }, [currentSize.width]);

  const handleResizeStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const aspectRatio = rect.width / rect.height;

    setResizeState({
      isResizing: true,
      startX: e.clientX,
      startY: e.clientY,
      startWidth: rect.width,
      startHeight: rect.height,
      aspectRatio
    });
  }, []);

  const handleResizeMove = useCallback(
    (e: MouseEvent) => {
      if (!resizeState.isResizing) return;

      const deltaX = e.clientX - resizeState.startX;
      const deltaY = e.clientY - resizeState.startY;

      // Use the larger delta to maintain aspect ratio
      const delta =
        Math.abs(deltaX) > Math.abs(deltaY)
          ? deltaX
          : deltaY * resizeState.aspectRatio;

      const newWidth = Math.max(100, resizeState.startWidth + delta);
      const newHeight = Math.round(newWidth / resizeState.aspectRatio);

      setCurrentSize({
        width: Math.round(newWidth),
        height: newHeight
      });
    },
    [resizeState]
  );

  const handleResizeEnd = useCallback(() => {
    if (resizeState.isResizing && currentSize.width && currentSize.height) {
      updateAttributes({
        width: currentSize.width,
        height: currentSize.height
      });
    }

    setResizeState(prev => ({
      ...prev,
      isResizing: false
    }));
  }, [resizeState.isResizing, currentSize, updateAttributes]);

  // Global mouse event listeners for resize
  useEffect(() => {
    if (!resizeState.isResizing) {
      return;
    }

    document.addEventListener("mousemove", handleResizeMove);
    document.addEventListener("mouseup", handleResizeEnd);

    return () => {
      document.removeEventListener("mousemove", handleResizeMove);
      document.removeEventListener("mouseup", handleResizeEnd);
    };
  }, [resizeState.isResizing, handleResizeMove, handleResizeEnd]);

  // Alignment styles using flexbox for reliable positioning
  const alignmentStyles = {
    left: "yl:justify-start",
    center: "yl:justify-center",
    right: "yl:justify-end"
  };

  return (
    <NodeViewWrapper
      as='div'
      className={classNames(
        "yl:my-4 yl:flex yl:w-full",
        alignmentStyles[alignment]
      )}
    >
      <div
        ref={containerRef}
        className='yl:relative yl:inline-block'
        style={{
          width: currentSize.width ? `${currentSize.width}px` : "auto",
          maxWidth: "100%"
        }}
      >
        <img
          ref={imageRef}
          src={src}
          alt={alt || ""}
          title={title || ""}
          onLoad={handleImageLoad}
          className={classNames(
            "yl:block yl:w-full yl:h-auto yl:rounded-md",
            "yl:transition-shadow yl:duration-200",
            {
              "yl:outline yl:outline-primary yl:outline-offset-2": selected,
              "yl:cursor-default": !resizeState.isResizing
            }
          )}
          style={{
            width: currentSize.width ? `${currentSize.width}px` : "auto",
            height: currentSize.height ? `${currentSize.height}px` : "auto",
            maxWidth: "100%"
          }}
          draggable={false}
        />

        {/* Resize handles - only show when selected */}
        {selected && (
          <>
            {/* Corner resize handles */}
            <div
              className='resize-handle resize-handle-se'
              onMouseDown={handleResizeStart}
              title='Drag to resize'
            />
            <div
              className='resize-handle resize-handle-sw'
              onMouseDown={handleResizeStart}
              title='Drag to resize'
            />
            <div
              className='resize-handle resize-handle-ne'
              onMouseDown={handleResizeStart}
              title='Drag to resize'
            />
            <div
              className='resize-handle resize-handle-nw'
              onMouseDown={handleResizeStart}
              title='Drag to resize'
            />

            {/* Size indicator */}
            {currentSize.width && currentSize.height && (
              <div className='yl:absolute yl:bottom-2 yl:right-2 yl:bg-black/70 yl:text-white yl:text-xs yl:px-2 yl:py-1 yl:rounded yl:pointer-events-none'>
                {currentSize.width} × {currentSize.height}
              </div>
            )}
          </>
        )}
      </div>
    </NodeViewWrapper>
  );
};

ResizableImageNodeView.displayName = "ResizableImageNodeView";

export { ResizableImageNodeView };
