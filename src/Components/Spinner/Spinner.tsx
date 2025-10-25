import { FC } from "react";

import { Icon } from "../Icon";
import { ISpinnerProps } from "./types";

const Spinner: FC<ISpinnerProps> = props => {
  return <Icon dataTestId='icon-spinner' iconName='IconSpinner' {...props} />;
};

export { Spinner };
