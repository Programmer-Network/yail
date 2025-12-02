import { ISlashMenuItemWithCommand } from "../SlashMenu.types";

export interface ISlashMenuItemProps {
  item: ISlashMenuItemWithCommand;
  isSelected: boolean;
  hasSubmenu: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  itemRef: (el: HTMLButtonElement | null) => void;
}
