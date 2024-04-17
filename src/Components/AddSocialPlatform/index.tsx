import useAJVForm from "@programmer_network/use-ajv-form";
import { FC } from "react";

import Button from "Components/Button";
import { IconAdd } from "Components/Icons";
import { Input, Select } from "Components/Inputs";
import { Paragraph } from "Components/Typography";

const AddSocialPlatform: FC<{
  platforms: { name: string; url: string }[];
  onAdd: (data: Record<string, string>) => void;
}> = ({ onAdd, platforms }) => {
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
    <div className='grid grid-cols-12 items-start gap-2 my-4'>
      <Select
        name='platform'
        label='Platform'
        onChange={form.set}
        inputWrapperClassName='col-span-5'
        value={form.state.platform.value}
        error={form.state.platform.error}
        options={platforms.map(({ name }) => ({
          label: name,
          value: name
        }))}
      />
      <div className='col-span-5'>
        <Input
          name='url'
          label='Username'
          hint={
            <div>
              <Paragraph>
                Username, a slug or a handle. Different platforms call it
                differently.
              </Paragraph>
              <Paragraph className='text-red-500'>
                <span className='font-bold'>Do not</span> include the base URL.
              </Paragraph>
            </div>
          }
          value={form.state.url.value}
          error={form.state.url.error}
          onChange={form.set}
        />
      </div>
      <Button
        outlined
        className='col-span-2 mt-8'
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
        <div className='flex gap-1 items-center'>
          <IconAdd className='w-6' />
        </div>
      </Button>
    </div>
  );
};

export default AddSocialPlatform;
