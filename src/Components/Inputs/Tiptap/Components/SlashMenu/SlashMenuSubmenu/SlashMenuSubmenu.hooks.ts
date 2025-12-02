import { useCallback } from "react";

interface IUseSlashMenuSubmenuProps {
  onItemClick: (index: number) => void;
  onItemMouseEnter: (index: number) => void;
}

interface IUseSlashMenuSubmenuReturn {
  createClickHandler: (index: number) => () => void;
  createMouseEnterHandler: (index: number) => () => void;
}

export const useSlashMenuSubmenu = ({
  onItemClick,
  onItemMouseEnter
}: IUseSlashMenuSubmenuProps): IUseSlashMenuSubmenuReturn => {
  const createClickHandler = useCallback(
    (index: number) => () => {
      onItemClick(index);
    },
    [onItemClick]
  );

  const createMouseEnterHandler = useCallback(
    (index: number) => () => {
      onItemMouseEnter(index);
    },
    [onItemMouseEnter]
  );

  return {
    createClickHandler,
    createMouseEnterHandler
  };
};
