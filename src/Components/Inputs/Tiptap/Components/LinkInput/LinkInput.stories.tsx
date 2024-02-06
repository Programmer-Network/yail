import { LinkInput } from ".";

export default {
  title: "Rich Text Editing / Tiptap / LinkInput",
  component: LinkInput
};

export const Default = () => {
  return <LinkInput position={{ x: 0, y: 0 }} value='Hi world' />;
};
