import H6 from ".";
import Paragraph from "../Paragraph";

export default {
  title: "Typography/H6",
  parameters: {
    layout: "centered"
  },
  component: H6
};

export const Default = () => {
  return (
    <div>
      <H6>Hi World</H6>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quasi.
      </Paragraph>
    </div>
  );
};
