import Paragraph from ".";

export default {
  title: "Typography/Paragraph",

  component: Paragraph
};

export const Default = () => {
  return (
    <Paragraph onClick={() => console.log("Hello, world")}>Hi World</Paragraph>
  );
};
