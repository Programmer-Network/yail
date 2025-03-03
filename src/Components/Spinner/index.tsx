import { FC } from "react";

import Icon from "Components/Icon";

import { ISpinnerProps } from "./types";

const Spinner: FC<ISpinnerProps> = props => {
  return <Icon iconName='IconSpinner' {...props} />;
};

export default Spinner;
