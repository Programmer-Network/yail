import { FC } from "react";

import Button from "../../../Components/Button";
import Icon from "../../../Components/Icon";
import { H3, Paragraph } from "../../../Components/Typography";

const PasswordChanged: FC<{
  onButtonClick: () => void;
}> = ({ onButtonClick }) => {
  return (
    <div className='text-center flex flex-col justify-center items-center'>
      <Icon iconName='IconCheck' className='w-36 text-secondary' />
      <div className='flex flex-col gap-2'>
        <H3>Password has been successfully changed</H3>
        <Paragraph className='text-2xl'>
          You can now login with your new password
        </Paragraph>
        <div className='mt-2'>
          <Button onClick={onButtonClick}>Back to Login</Button>
        </div>
      </div>
    </div>
  );
};

export default PasswordChanged;
