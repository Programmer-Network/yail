import { FC } from "react";

import IconSpinner from "Components/Icons/IconSpinner";
import { IIconProps } from "Components/Icons/types";

interface ISpinnerProps extends IIconProps {
  className?: string;
}

const Spinner: FC<ISpinnerProps> = props => {
  return <IconSpinner {...props} />;
};

export default Spinner;
