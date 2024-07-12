import useAJVForm from "@programmer_network/use-ajv-form";
import { FC } from "react";

import Button from "Components/Button";
import { Input, Select } from "Components/Inputs";

import { schema } from "./constant";
import { IAddSocialPlatformProps } from "./types";
import { getValueHint, getValueLabel } from "./utils";

const AddSocialPlatform: FC<IAddSocialPlatformProps> = ({
  onAdd,
  platforms
}) => {
  const form = useAJVForm(
    {
      platform: "",
      url: ""
    },
    schema
  );

  return (
    <div className='yl-grid yl-grid-cols-12 yl-items-start yl-gap-2 my-4'>
      <Select
        name='platform'
        label='Platform'
        onChange={form.set}
        inputWrapperClassName='yl-col-span-5'
        value={form.state.platform.value}
        error={form.state.platform.error}
        options={platforms.map(({ name }) => ({
          label: name,
          value: name
        }))}
      />
      <div className='yl-col-span-5'>
        <Input
          name='url'
          label={getValueLabel(form.state.platform.value)}
          hint={getValueHint(form.state.platform.value)}
          value={form.state.url.value}
          error={form.state.url.error}
          onChange={form.set}
        />
      </div>
      <Button
        outlined
        className='yl-col-span-1 yl-mt-8'
        onClick={() => {
          if (!form.validate().isValid) {
            return;
          }

          onAdd?.({
            [form.state.platform.value]: form.state.url.value
          });

          form.reset();
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default AddSocialPlatform;
