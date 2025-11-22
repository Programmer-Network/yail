import { Icon } from "../../../Components/Icon";
import { H3, Paragraph } from "../../../Components/Typography";

const SuccessfulSignup = () => {
  return (
    <div className='yl:flex yl:flex-col yl:items-center yl:justify-center yl:text-center'>
      <Icon iconName='IconUserSmile' className='yl:text-secondary yl:w-36' />
      <div className='yl:flex yl:flex-col yl:gap-2'>
        <H3>Thank you for registering.</H3>
        <Paragraph className='yl:text-2xl'>
          To proceed further, please{" "}
          <span className='yl:font-bold'>verify your email</span>
        </Paragraph>
      </div>
    </div>
  );
};

export default SuccessfulSignup;
