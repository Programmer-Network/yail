import { FC } from "react";

import Button from "Components/Button";
import { IconCheck } from "Components/Icons";
import { H3, Paragraph } from "Components/Typography";

const PasswordChanged: FC<{
  onButtonClick: () => void;
}> = ({ onButtonClick }) => {
  return (
    <div className='yl-text-center yl-flex yl-flex-col yl-justify-center yl-items-center'>
      <IconCheck className='yl-w-36 yl-text-primary' />
      <div className='yl-flex yl-flex-col yl-gap-2'>
        <H3>Password has been successfully changed</H3>
        <Paragraph className='yl-text-2xl'>
          You can now login with your new password
        </Paragraph>
        <div className='yl-mt-2'>
          <Button onClick={onButtonClick}>Back to Login</Button>
        </div>
      </div>
    </div>
  );
};

export default PasswordChanged;
