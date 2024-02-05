import ImageUpload from ".";

export default {
  title: "Rich Text Editing / Tiptap / ImageUpload",
  parameters: {
    layout: "centered"
  },
  component: ImageUpload
};

export const Default = () => {
  return <ImageUpload onFileLoaded={() => null} />;
};
