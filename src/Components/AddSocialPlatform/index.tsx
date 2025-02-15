import useAJVForm from "@programmer_network/use-ajv-form";
import classNames from "classnames";
import { FC } from "react";

import Button from "Components/Button";
import { Input, Select } from "Components/Inputs";

import { schema } from "./constant";
import { IAddSocialPlatformProps } from "./types";
import { getValueHint, getValueLabel } from "./utils";

const AddSocialPlatform: FC<IAddSocialPlatformProps> = ({
  className,
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
    <div
      className={classNames(
        "yl-grid md:yl-grid-cols-12 yl-items-end yl-gap-2",
        className
      )}
    >
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
      <div>
        <Button
          outlined
          className='yl-col-span-1 yl-mt-2 md:yl-mt-0'
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
    </div>
  );
};

export default AddSocialPlatform;
