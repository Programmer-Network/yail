import { ISlashMenuSubmenuItem } from "../../SlashMenu.types";

export interface ISlashMenuSubmenuItemProps {
  item: ISlashMenuSubmenuItem;
  isSelected: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}
