import { StepWizardChildProps } from "react-step-wizard";

import Button from "../../../Components/Button";
import Icon from "../../../Components/Icon";
import { Paragraph } from "../../../Components/Typography";

export const StepTwo: React.FC<Partial<StepWizardChildProps>> = props => {
  return (
    <div className='flex flex-col gap-4 md:gap-8 p-4 md:p-0'>
      <div className='flex flex-col items-center gap-8'>
        <Icon iconName='IconProgrammerCoding' className='w-64 md:w-96' />{" "}
        <div>
          <Paragraph>
            Programmer Network exists as a professional haven for developers,
            committed to maintaining an environment focused solely on our
            domain. Our mission is to create a{" "}
            <span className='font-semibold'>breakout room</span> for developers
            to engage, learn, and share, devoid of unrelated and potentially
            disruptive content.
          </Paragraph>
        </div>
      </div>
      <div className='flex justify-end gap-2'>
        <div>
          <Button
            className='w-full md:w-auto button--gray'
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
