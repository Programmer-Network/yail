import PasswordChanged from ".";

export default {
  title: "Views/PasswordChanged",
  parameters: {
    layout: "centered"
  },
  component: PasswordChanged
};

export const Default = () => {
  return <PasswordChanged onButtonClick={() => console.log("clicked")} />;
};
