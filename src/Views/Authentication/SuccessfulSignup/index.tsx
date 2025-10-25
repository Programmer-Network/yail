import { Icon } from "../../../Components/Icon";
import { H3, Paragraph } from "../../../Components/Typography";

const SuccessfulSignup = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <Icon iconName='IconUserSmile' className='text-secondary w-36' />
      <div className='flex flex-col gap-2'>
        <H3>Thank you for registering.</H3>
        <Paragraph className='text-2xl'>
          To proceed further, please{" "}
          <span className='font-bold'>verify your email</span>
        </Paragraph>
      </div>
    </div>
  );
};

export default SuccessfulSignup;
