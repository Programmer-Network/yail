import { StepWizardChildProps } from "react-step-wizard";

import Button from "Components/Button";
import { IconProgrammerCoding } from "Components/Icons";
import { H2, Paragraph } from "Components/Typography";

export const StepOne: React.FC<Partial<StepWizardChildProps>> = props => {
  return (
    <div className='yl-flex yl-flex-col yl-justify-center yl-items-center'>
      <div className='yl-flex yl-flex-col yl-items-center yl-justify-center yl-gap-8'>
        <IconProgrammerCoding className='yl-w-64 md:yl-w-96' />
        <header>
          <H2 className='yl-text-center yl-mb-2'>Hello, Programmer.</H2>
          <div>
            <Paragraph className='yl-text-center yl-text-xl'>
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
