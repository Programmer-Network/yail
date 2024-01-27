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
      <Icon iconName='IconItalic' />
      <Icon iconName='IconAddBookmark' />
    </div>
  );
};
