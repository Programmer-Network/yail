import { ChangeEvent, useCallback } from "react";

import {
  IUseCustomTaskItemProps,
  IUseCustomTaskItemReturn
} from "./CustomTaskItem.types";

export const useCustomTaskItem = ({
  updateAttributes
}: IUseCustomTaskItemProps): IUseCustomTaskItemReturn => {
  const handleCheckboxChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      updateAttributes({ checked: event.target.checked });
    },
    [updateAttributes]
  );

  return {
    handleCheckboxChange
  };
};
