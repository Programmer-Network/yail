import { Editor } from "@tiptap/core";
import { FC, MouseEvent } from "react";

import { Dropdown } from "../../../../Dropdown";
import { Icon } from "../../../../Icon";

interface ITableDropdownProps {
  editor: Editor;
  isActive: boolean;
}

export const TableDropdown: FC<ITableDropdownProps> = ({
  editor,
  isActive
}) => {
  const isInTable = editor.isActive("table");

  const handleInsertTable = (e: MouseEvent) => {
    e.stopPropagation();
    editor.commands.insertTable({ rows: 3, cols: 3, withHeaderRow: true });
  };

  const handleAddRowBefore = (e: MouseEvent) => {
    e.stopPropagation();
    editor.commands.addRowBefore();
  };

  const handleAddRowAfter = (e: MouseEvent) => {
    e.stopPropagation();
    editor.commands.addRowAfter();
  };

  const handleDeleteRow = (e: MouseEvent) => {
    e.stopPropagation();
    editor.commands.deleteRow();
  };

  const handleAddColumnBefore = (e: MouseEvent) => {
    e.stopPropagation();
    editor.commands.addColumnBefore();
  };

  const handleAddColumnAfter = (e: MouseEvent) => {
    e.stopPropagation();
    editor.commands.addColumnAfter();
  };

  const handleDeleteColumn = (e: MouseEvent) => {
    e.stopPropagation();
    editor.commands.deleteColumn();
  };

  const handleMergeCells = (e: MouseEvent) => {
    e.stopPropagation();
    editor.commands.mergeCells();
  };

  const handleSplitCell = (e: MouseEvent) => {
    e.stopPropagation();
    editor.commands.splitCell();
  };

  const handleDeleteTable = (e: MouseEvent) => {
    e.stopPropagation();
    editor.commands.deleteTable();
  };

  const options = [
    {
      value: "Insert Table",
      icon: { iconName: "TableOutline", className: "yl:w-4 yl:h-4" },
      onClick: handleInsertTable
    },
    ...(isInTable
      ? [
          {
            value: "Add Row Above",
            icon: { iconName: "PlusCircleOutline", className: "yl:w-4 yl:h-4" },
            onClick: handleAddRowBefore
          },
          {
            value: "Add Row Below",
            icon: { iconName: "PlusCircleOutline", className: "yl:w-4 yl:h-4" },
            onClick: handleAddRowAfter
          },
          {
            value: "Delete Row",
            icon: {
              iconName: "MinusCircleOutline",
              className: "yl:w-4 yl:h-4"
            },
            onClick: handleDeleteRow
          },
          {
            value: "Add Column Left",
            icon: { iconName: "ViewColumnOutline", className: "yl:w-4 yl:h-4" },
            onClick: handleAddColumnBefore
          },
          {
            value: "Add Column Right",
            icon: { iconName: "ViewColumnOutline", className: "yl:w-4 yl:h-4" },
            onClick: handleAddColumnAfter
          },
          {
            value: "Delete Column",
            icon: {
              iconName: "MinusCircleOutline",
              className: "yl:w-4 yl:h-4"
            },
            onClick: handleDeleteColumn
          },
          {
            value: "Merge Cells",
            icon: { iconName: "ViewGridOutline", className: "yl:w-4 yl:h-4" },
            onClick: handleMergeCells
          },
          {
            value: "Split Cell",
            icon: { iconName: "ViewGridOutline", className: "yl:w-4 yl:h-4" },
            onClick: handleSplitCell
          },
          {
            value: "Delete Table",
            icon: {
              iconName: "MinusCircleOutline",
              className: "yl:w-4 yl:h-4"
            },
            onClick: handleDeleteTable
          }
        ]
      : [])
  ];

  return (
    <Dropdown
      buttonContent={
        <Icon
          iconName='TableOutline'
          className={`yl:h-6 yl:w-6 ${isActive ? "text-primary" : "text-text"}`}
        />
      }
      buttonClassName='hover:bg-text/10 yl:p-2 yl:rounded'
      options={options}
      placement='bottom-start'
    />
  );
};
