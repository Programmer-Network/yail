import { useCallback, useRef } from "react";

interface IUseSlashMenuListHandlersProps {
  handleItemClick: (index: number) => void;
  handleItemMouseEnter: (index: number) => void;
}

interface IUseSlashMenuListHandlersReturn {
  isMouseInSubmenuRef: React.RefObject<boolean>;
  createItemClickHandler: (flatIdx: number) => () => void;
  createItemMouseEnterHandler: (flatIdx: number) => () => void;
  handleSubmenuMouseEnter: () => void;
  handleSubmenuMouseLeave: () => void;
}

export const useSlashMenuListHandlers = ({
  handleItemClick,
  handleItemMouseEnter
}: IUseSlashMenuListHandlersProps): IUseSlashMenuListHandlersReturn => {
  const isMouseInSubmenuRef = useRef(false);

  const createItemClickHandler = useCallback(
    (flatIdx: number) => () => {
      handleItemClick(flatIdx);
    },
    [handleItemClick]
  );

  const createItemMouseEnterHandler = useCallback(
    (flatIdx: number) => () => {
      if (isMouseInSubmenuRef.current) {
        return;
      }
      handleItemMouseEnter(flatIdx);
    },
    [handleItemMouseEnter]
  );

  const handleSubmenuMouseEnter = useCallback(() => {
    isMouseInSubmenuRef.current = true;
  }, []);

  const handleSubmenuMouseLeave = useCallback(() => {
    isMouseInSubmenuRef.current = false;
  }, []);

  return {
    isMouseInSubmenuRef,
    createItemClickHandler,
    createItemMouseEnterHandler,
    handleSubmenuMouseEnter,
    handleSubmenuMouseLeave
  };
};
