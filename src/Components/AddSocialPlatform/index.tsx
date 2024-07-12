import useAJVForm from "@programmer_network/use-ajv-form";
import { FC } from "react";

import Button from "Components/Button";
import { Input, Select } from "Components/Inputs";

import { IAddSocialPlatformProps } from "./types";

const AddSocialPlatform: FC<IAddSocialPlatformProps> = ({
  onAdd,
  platforms,
  valueProps = {
    name: "",
    label: "",
    hint: ""
  }
}) => {
  const form = useAJVForm(
    {
      platform: "",
      url: ""
    },
    {
      type: "object",
      properties: {
        platform: {
          type: "string",
          minLength: 1,
          errorMessage: "Please select a platform"
        },
        url: {
          type: "string",
          minLength: 1,
          errorMessage: "Please enter a username"
        }
      },
      required: ["platform", "url"]
    }
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
          {...valueProps}
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
