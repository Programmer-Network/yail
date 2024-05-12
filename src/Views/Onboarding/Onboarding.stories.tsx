import { ErrorObject } from "ajv";
import { useState } from "react";

import Onboarding from ".";
import { IUserProfile } from "./types";

export default {
  title: "Views/Onboarding",
  component: Onboarding
};

export const Default = () => {
  const [serverErrors, setServerErrors] = useState<ErrorObject[]>([]);

  const handleSubmit = async (form: IUserProfile | null) => {
    console.log("🚀 ─── handleSubmit ─── form:", form, setServerErrors);
  };

  return (
    <Onboarding
      onSubmit={handleSubmit}
      countries={["United States", "Canada", "Mexico"]}
      tags={[
        { name: "Haskell", id: 1 },
        { name: "Python", id: 2 },
        { name: "JavaScript", id: 3 }
      ]}
      serverErrors={serverErrors}
    />
  );
};
