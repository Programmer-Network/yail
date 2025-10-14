import PasswordChanged from ".";

export default {
  title: "Views/PasswordChanged",

  component: PasswordChanged
};

export const Default = () => {
  return <PasswordChanged onButtonClick={() => console.log("clicked")} />;
};
