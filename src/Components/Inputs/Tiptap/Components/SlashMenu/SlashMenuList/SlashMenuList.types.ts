import { ISlashMenuListHandle, ISlashMenuListProps } from "../SlashMenu.types";

export type { ISlashMenuListHandle, ISlashMenuListProps };

export interface ISlashMenuListItemData {
  flatIdx: number;
  isSelected: boolean;
  hasSubmenu: boolean;
}
