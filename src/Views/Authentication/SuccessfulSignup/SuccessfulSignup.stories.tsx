import SuccessfulSignup from ".";

export default {
  title: "Views/SuccessfulSignup",
  parameters: {
    layout: "centered"
  },
  component: SuccessfulSignup
};

export const Default = () => {
  return (
    <div>
      <SuccessfulSignup />
    </div>
  );
};
