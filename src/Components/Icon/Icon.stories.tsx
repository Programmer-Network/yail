import Icon from ".";

export default {
  title: "Core/Icon",
  component: Icon,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export const Default = () => {
  return (
    <div>
      <Icon iconName='IconItalic' className='yl-w-36 yl-text-text' />
    </div>
  );
};
