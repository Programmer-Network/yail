import { FC } from "react";

import IconSpinner from "Components/Icons/IconSpinner";

import { ISpinnerProps } from "./types";

const Spinner: FC<ISpinnerProps> = props => {
  return <IconSpinner {...props} />;
};

export default Spinner;
