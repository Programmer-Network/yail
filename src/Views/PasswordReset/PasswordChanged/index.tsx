import { FC } from "react";

import { Button } from "../../../Components/Button";
import { Icon } from "../../../Components/Icon";
import { H3, Paragraph } from "../../../Components/Typography";

const PasswordChanged: FC<{
  onButtonClick: () => void;
}> = ({ onButtonClick }) => {
  return (
    <div className='yl:flex yl:flex-col yl:items-center yl:justify-center yl:text-center'>
      <Icon iconName='IconCheck' className='yl:text-secondary yl:w-36' />
      <div className='yl:flex yl:flex-col yl:gap-2'>
        <H3>Password has been successfully changed</H3>
        <Paragraph className='yl:text-2xl'>
          You can now login with your new password
        </Paragraph>
        <div className='yl:mt-2'>
          <Button onClick={onButtonClick}>Back to Login</Button>
        </div>
      </div>
    </div>
  );
};

export default PasswordChanged;
