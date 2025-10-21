import { ErrorObject } from "ajv";
import { FC, createContext } from "react";
import StepWizard from "react-step-wizard";

import StepOne from "./Step1";
import StepTwo from "./Step2";
import StepThree from "./Step3";
import { ITag } from "./types";

export const OnboardingContext = createContext<{
  onSubmit: () => void;
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
  onSubmit: () => void;
  tags: ITag[];
  countries: string[];
  serverErrors: ErrorObject[];
}> = ({ tags, countries, onSubmit, serverErrors }) => {
  return (
    <OnboardingContext.Provider
      value={{ onSubmit, tags, countries, serverErrors }}
    >
      <div className='mx-auto my-6 w-full px-4 sm:max-w-5xl lg:max-w-2xl lg:px-8'>
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
