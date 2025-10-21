import { StepWizardChildProps } from "react-step-wizard";

import Button from "../../../Components/Button";
import Icon from "../../../Components/Icon";
import { H2, Paragraph } from "../../../Components/Typography";

export const StepOne: React.FC<Partial<StepWizardChildProps>> = props => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center justify-center gap-8'>
        <Icon iconName='IconProgrammerCoding' className='w-64 md:w-96' />
        <header>
          <H2 className='text-center mb-2'>Hello, Programmer.</H2>
          <div>
            <Paragraph className='text-center text-xl'>
              Welcome. We are happy to have you here.
            </Paragraph>
          </div>
        </header>
        <Button onClick={props.nextStep}>Continue</Button>
      </div>
    </div>
  );
};

export default StepOne;
