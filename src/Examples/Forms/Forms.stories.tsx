import useAjvForm from "@programmer_network/use-ajv-form";

import Button from "Components/Button";
import { Input, Textarea } from "Components/Inputs";

const meta = {
  title: "Input/Forms",
  argTypes: {}
};

export default meta;

export const UseAjvForm = () => {
  const form = useAjvForm(
    { title: "", description: "", about: "" },
    {
      type: "object",
      required: [],
      properties: {
        title: { type: "string", minLength: 2, "secure-string": true },
        description: { type: "string", minLength: 5 },
        about: { type: "string", minLength: 5 }
      }
    }
  );

  return (
    <div className='flex flex-col gap-4 p-8'>
      <div className='grid grid-cols-2 gap-4'>
        <Input
          name='title'
          label='Title'
          type='text'
          value={form.state.title.value}
          error={form.state.title.error as string}
          onBlur={() => form.onBlur("title")}
          onChange={({ title }) => form.set({ title })}
        />
        <Input
          name='description'
          label='Description'
          type='text'
          value={form.state.description.value}
          error={form.state.description.error as string}
          onBlur={() => form.onBlur("description")}
          onChange={({ description }) => form.set({ description })}
        />
      </div>
      <Textarea
        name='about'
        label='About'
        value={form.state.about.value}
        error={form.state.about.error as string}
        onBlur={() => form.onBlur("about")}
        onChange={({ about }) => form.set({ about })}
      />
      <Button className='max-w-max' onClick={() => form.validate()}>
        Save
      </Button>
    </div>
  );
};
