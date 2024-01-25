import H1 from ".";
import Paragraph from "../Paragraph";

export default {
  title: "Typography/H1",
  parameters: {
    layout: "centered"
  },
  component: H1
};

export const Default = () => {
  return (
    <div>
      <H1>Hi World</H1>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quasi.
      </Paragraph>
    </div>
  );
};
