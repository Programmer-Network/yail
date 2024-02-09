import { ModalInput } from ".";

export default {
  title: "Rich Text Editing / Tiptap / ModalInput",
  component: ModalInput
};

export const Default = () => {
  return <ModalInput position={{ x: 0, y: 0 }} value='Hi world' />;
};
