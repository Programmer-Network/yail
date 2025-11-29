import { Editor } from "@tiptap/core";
import { useEditorState } from "@tiptap/react";
import { NodeSelection } from "prosemirror-state";
import { FC, useCallback, useRef } from "react";

import { Dropdown } from "../../../../Dropdown";
import { Icon } from "../../../../Icon";
import { ImageAlignment } from "../ResizableImage/ResizableImage.types";

interface IImageAlignmentDropdownProps {
  editor: Editor;
}

export const ImageAlignmentDropdown: FC<IImageAlignmentDropdownProps> = ({
  editor
}) => {
  // Store the node position when dropdown is about to open
  const nodePositionRef = useRef<number | null>(null);

  // Subscribe to editor state for selection changes
  const { isImageSelected, currentAlignment, nodePos } = useEditorState({
    editor,
    selector: ({ editor: e }) => {
      const { selection } = e.state;
      const isNodeSel = selection instanceof NodeSelection;
      const selectedNode = isNodeSel ? (selection as NodeSelection).node : null;
      const isImage = selectedNode?.type.name === "image";

      return {
        isImageSelected: isImage,
        currentAlignment: isImage
          ? (selectedNode?.attrs["data-align"] as ImageAlignment) || "center"
          : "center",
        nodePos: isImage ? selection.from : null
      };
    }
  });

  // Store position when we detect an image is selected
  if (isImageSelected && nodePos !== null) {
    nodePositionRef.current = nodePos;
  }

  const alignImage = useCallback(
    (alignment: ImageAlignment) => {
      const pos = nodePositionRef.current;
      if (pos === null) return;

      const { state, view } = editor;
      const node = state.doc.nodeAt(pos);

      if (node?.type.name === "image") {
        const tr = state.tr.setNodeMarkup(pos, undefined, {
          ...node.attrs,
          "data-align": alignment
        });

        const newSelection = NodeSelection.create(tr.doc, pos);
        tr.setSelection(newSelection);
        view.dispatch(tr);
      }
    },
    [editor]
  );

  const handleAlignLeft = useCallback(() => alignImage("left"), [alignImage]);
  const handleAlignCenter = useCallback(
    () => alignImage("center"),
    [alignImage]
  );
  const handleAlignRight = useCallback(() => alignImage("right"), [alignImage]);

  const options = isImageSelected
    ? [
        {
          value: "Align Left",
          icon: {
            iconName: "AlignTextLeftOutline",
            className: `yl:w-4 yl:h-4 ${currentAlignment === "left" ? "yl:text-primary" : ""}`
          },
          onClick: handleAlignLeft
        },
        {
          value: "Align Center",
          icon: {
            iconName: "AlignTextCenterOutline",
            className: `yl:w-4 yl:h-4 ${currentAlignment === "center" ? "yl:text-primary" : ""}`
          },
          onClick: handleAlignCenter
        },
        {
          value: "Align Right",
          icon: {
            iconName: "AlignTextRightOutline",
            className: `yl:w-4 yl:h-4 ${currentAlignment === "right" ? "yl:text-primary" : ""}`
          },
          onClick: handleAlignRight
        }
      ]
    : [];

  // Don't render if no image is selected
  if (!isImageSelected) {
    return null;
  }

  return (
    <Dropdown
      buttonContent={
        <Icon
          iconName='ImageOutline'
          className='yl:h-6 yl:w-6 yl:text-primary'
        />
      }
      buttonClassName='hover:bg-text/10 yl:p-2 yl:rounded'
      options={options}
      placement='bottom-start'
    />
  );
};
