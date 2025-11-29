import { Editor } from "@tiptap/core";
import { NodeSelection } from "prosemirror-state";
import { FC, MouseEvent } from "react";

import { Dropdown } from "../../../../Dropdown";
import { Icon } from "../../../../Icon";

interface IImageAlignmentDropdownProps {
  editor: Editor;
}

export const ImageAlignmentDropdown: FC<IImageAlignmentDropdownProps> = ({
  editor
}) => {
  // Check if an image node is selected using NodeSelection
  const { selection } = editor.state;
  const isNodeSelection = selection instanceof NodeSelection;
  const selectedNode = isNodeSelection
    ? (selection as NodeSelection).node
    : null;
  const isImageSelected = selectedNode?.type.name === "image";

  const currentAlignment = isImageSelected
    ? selectedNode?.attrs["data-align"] || "center"
    : "center";

  const handleAlignLeft = (e: MouseEvent) => {
    e.stopPropagation();
    editor
      .chain()
      .focus()
      .updateAttributes("image", { "data-align": "left" })
      .run();
  };

  const handleAlignCenter = (e: MouseEvent) => {
    e.stopPropagation();
    editor
      .chain()
      .focus()
      .updateAttributes("image", { "data-align": "center" })
      .run();
  };

  const handleAlignRight = (e: MouseEvent) => {
    e.stopPropagation();
    editor
      .chain()
      .focus()
      .updateAttributes("image", { "data-align": "right" })
      .run();
  };

  const options = isImageSelected
    ? [
        {
          value: "Align Left",
          icon: {
            iconName: "AlignTextLeftOutline",
            className: `yl:w-4 yl:h-4 ${currentAlignment === "left" ? "yl:text-primary" : ""}`
          },
          onClick: handleAlignLeft,
          isActive: currentAlignment === "left"
        },
        {
          value: "Align Center",
          icon: {
            iconName: "AlignTextCenterOutline",
            className: `yl:w-4 yl:h-4 ${currentAlignment === "center" ? "yl:text-primary" : ""}`
          },
          onClick: handleAlignCenter,
          isActive: currentAlignment === "center"
        },
        {
          value: "Align Right",
          icon: {
            iconName: "AlignTextRightOutline",
            className: `yl:w-4 yl:h-4 ${currentAlignment === "right" ? "yl:text-primary" : ""}`
          },
          onClick: handleAlignRight,
          isActive: currentAlignment === "right"
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
