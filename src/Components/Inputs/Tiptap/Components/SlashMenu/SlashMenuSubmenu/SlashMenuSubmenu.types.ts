import { ISlashMenuSubmenuItem } from "../SlashMenu.types";

export interface ISlashMenuSubmenuProps {
  items: ISlashMenuSubmenuItem[];
  selectedIndex: number | null;
  onItemClick: (index: number) => void;
  onItemMouseEnter: (index: number) => void;
}
