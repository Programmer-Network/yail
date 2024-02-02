import H2 from ".";
import Paragraph from "../Paragraph";

export default {
  title: "Typography/H2",
  parameters: {
    layout: "centered"
  },
  component: H2
};

export const Default = () => {
  return (
    <div>
      <H2>Hi World</H2>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quasi.
      </Paragraph>
    </div>
  );
};
