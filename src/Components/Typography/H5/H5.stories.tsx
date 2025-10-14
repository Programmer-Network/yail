import H5 from ".";
import Paragraph from "../Paragraph";

export default {
  title: "Typography/H5",

  component: H5
};

export const Default = () => {
  return (
    <div>
      <H5>Hi World</H5>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quasi.
      </Paragraph>
    </div>
  );
};
