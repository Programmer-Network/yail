import { secureString } from "@programmer_network/ajv";
import useAJVForm from "@programmer_network/use-ajv-form";
import { FC, useContext, useState } from "react";
import { StepWizardChildProps } from "react-step-wizard";

import { OnboardingContext } from "..";
import { Button } from "../../../Components/Button";
import {
  Checkbox,
  DomainInput,
  Input,
  Select,
  Textarea
} from "../../../Components/Inputs";
import { H4, Paragraph } from "../../../Components/Typography";
import { schema } from "./schema";

export const StepThree: FC<Partial<StepWizardChildProps>> = props => {
  const { onSubmit, tags, countries, serverErrors } =
    useContext(OnboardingContext);

  const form = useAJVForm<{
    username: string;
    tags: number[];
    firstName: string;
    lastName: string;
    country: string;
    about: string;
  }>(
    {
      username: "",
      tags: [],
      firstName: "",
      lastName: "",
      country: "",
      about: ""
    },
    schema,
    {
      customKeywords: [secureString],
      errors: serverErrors || []
    }
  );

  const [showPersonalFields, setShowPersonalFields] = useState<boolean>(true);

  const handleSubmit = () => {
    if (!form.validate().isValid) {
      onSubmit();
      return;
    }

    onSubmit();
  };

  return (
    <div className='pb-20 md:pb-0'>
      <div className='mb-4'>
        <H4 className='mb-2'>Tell us about you</H4>
      </div>
      <div className='flex flex-col gap-4'>
        <DomainInput
          name='username'
          domain='programmer.network/'
          value={form.state.username.value?.toLowerCase().trim()}
          error={form.state.username.error}
          onChange={form.set}
        />
        <Select
          name='tags'
          label='Interests'
          onChange={form.set}
          value={form.state.tags.value}
          error={form.state.tags.error}
          options={tags.map(({ name, id }) => ({ value: id, label: name }))}
          isMulti
        />

        <Checkbox
          text='I prefer not to share personal (PII) information at this time.'
          checked={!showPersonalFields}
          onChange={e => {
            setShowPersonalFields(!e.target.checked);
          }}
        />

        {showPersonalFields && (
          <>
            <Input
              type='text'
              name='firstName'
              label='First Name'
              value={form.state.firstName.value}
              error={form.state.firstName.error}
              onChange={form.set}
            />
            <Input
              type='text'
              name='lastName'
              label='Last Name'
              value={form.state.lastName.value}
              error={form.state.lastName.error}
              onChange={form.set}
            />
            <Select
              name='country'
              label='Country'
              onChange={form.set}
              value={form.state.country.value}
              error={form.state.country.error}
              options={countries.map(country => ({
                value: country,
                label: country
              }))}
            />
          </>
        )}

        <Textarea
          label='How would you describe yourself?'
          value={form.state.about.value}
          error={form.state.about.error}
          name='about'
          rows={5}
          max={500}
          placeholder='e.g. Senior Haskell Developer, Champion of the Frozen Wastes'
          onChange={form.set}
        />

        {!showPersonalFields && (
          <div className='mb-4 flex flex-col gap-6'>
            <Paragraph>
              Completing your profile with accurate information is highly
              recommended. A detailed and authentic online presence can greatly
              enhance your connectivity with other developers, facilitate
              knowledge sharing, and potentially unlock new job opportunities.
            </Paragraph>

            <Paragraph>
              Don&apos;t forget that your online presence is a reflection of
              your professional self.
            </Paragraph>
          </div>
        )}

        <div className='flex justify-end gap-2'>
          <Button
            className='button--gray w-full md:w-auto'
            type='button'
            onClick={() => {
              props.previousStep?.();
            }}
            outlined
          >
            Back
          </Button>

          <Button
            type='submit'
            onClick={() => handleSubmit()}
            className='w-full md:w-auto'
            isLoading={false}
          >
            Complete Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
