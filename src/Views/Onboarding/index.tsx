import { ErrorObject } from "ajv";
import { FC, createContext } from "react";
import StepWizard from "react-step-wizard";

import StepOne from "./Step1";
import StepTwo from "./Step2";
import StepThree from "./Step3";
import { ITag, IUserProfile } from "./types";

export const OnboardingContext = createContext<{
  onSubmit: (form: IUserProfile | null) => void;
  tags: ITag[];
  countries: string[];
  serverErrors: ErrorObject[];
}>({
  onSubmit: () => {},
  tags: [],
  countries: [],
  serverErrors: []
});

const Onboarding: FC<{
  onSubmit: (form: IUserProfile | null) => void;
  tags: ITag[];
  countries: string[];
  serverErrors: ErrorObject[];
}> = ({ tags, countries, onSubmit, serverErrors }) => {
  return (
    <OnboardingContext.Provider
      value={{ onSubmit, tags, countries, serverErrors }}
    >
      <div className='yl-mx-auto yl-my-6 yl-w-full yl-px-4 sm:yl-max-w-5xl lg:yl-max-w-2xl lg:yl-px-8'>
        <StepWizard
          transitions={{
            enterRight: "0",
            enterLeft: "0",
            exitRight: "0",
            exitLeft: "0",
            intro: "0"
          }}
          className='overflow-hidden'
        >
          <StepOne />
          <StepTwo />
          <StepThree />
        </StepWizard>
      </div>
    </OnboardingContext.Provider>
  );
};

export default Onboarding;
