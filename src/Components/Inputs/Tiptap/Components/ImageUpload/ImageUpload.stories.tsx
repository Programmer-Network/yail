import ImageUpload from ".";

export default {
  title: "Rich Text Editing / Tiptap / ImageUpload",

  component: ImageUpload
};

export const Default = () => {
  return <ImageUpload onFileLoaded={() => null} />;
};
