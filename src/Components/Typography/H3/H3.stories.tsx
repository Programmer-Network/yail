import H3 from ".";
import Paragraph from "../Paragraph";

export default {
  title: "Typography/H3",
  parameters: {
    layout: "centered"
  },
  component: H3
};

export const Default = () => {
  return (
    <div>
      <H3>Hi World</H3>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quasi.
      </Paragraph>
    </div>
  );
};
