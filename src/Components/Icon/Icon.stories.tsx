import Icon from ".";

export default {
  title: "Core/Icon",
  component: Icon,
  tags: ["autodocs"]
};

export const Default = () => {
  return (
    <div>
      <Icon iconName='IconItalic' className='text-text w-36' />
    </div>
  );
};
