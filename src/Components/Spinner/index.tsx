import { FC } from "react";

import IconSpinner from "Components/Icons/IconSpinner";

export interface ISpinnerProps {
  className?: string;
}

const Spinner: FC<ISpinnerProps> = props => {
  return <IconSpinner {...props} />;
};

export default Spinner;
