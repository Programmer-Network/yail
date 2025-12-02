import { ISlashMenuItemWithCommand } from "../../SlashMenu.types";

export interface ISlashMenuListContentItemProps {
  item: ISlashMenuItemWithCommand;
  flatIdx: number;
  selectedIndex: number;
  onItemClick: () => void;
  onItemMouseEnter: () => void;
  itemRef: (el: HTMLButtonElement | null) => void;
}
