import SelectAsync from "./";

export default {
  title: "Input/SelectAsync"
};

const Template = () => {
  return (
    <div>
      <SelectAsync
        name='foo'
        onChange={item => console.log(item)}
        options={[{ value: "foo", label: "Foo" }]}
        value='foo'
      />
    </div>
  );
};

export const Primary = Template.bind({});
