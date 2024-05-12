import { StepWizardChildProps } from "react-step-wizard";

import Button from "Components/Button";
import { IconProgrammerCoding } from "Components/Icons";
import { Paragraph } from "Components/Typography";

export const StepTwo: React.FC<Partial<StepWizardChildProps>> = props => {
  return (
    <div className='yl-flex yl-flex-col yl-gap-4 md:yl-gap-8 yl-p-4 md:yl-p-0'>
      <div className='yl-flex yl-flex-col yl-items-center yl-gap-8'>
        <IconProgrammerCoding className='yl-w-64 md:yl-w-96' />{" "}
        <div>
          <Paragraph>
            Programmer Network exists as a professional haven for developers,
            committed to maintaining an environment focused solely on our
            domain. Our mission is to create a{" "}
            <span className='yl-font-semibold'>breakout room</span> for
            developers to engage, learn, and share, devoid of unrelated and
            potentially disruptive content.
          </Paragraph>
        </div>
      </div>
      <div className='yl-flex yl-justify-end yl-gap-2'>
        <div>
          <Button
            className='yl-w-full md:yl-w-auto button--gray'
            type='button'
            onClick={() => {
              props.previousStep?.();
            }}
            outlined
          >
            Back
          </Button>
        </div>
        <div>
          <Button onClick={props.nextStep}>Tell us about you</Button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
