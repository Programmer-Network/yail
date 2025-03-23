import FormActions from ".";

export default {
  title: "FormActions",
  parameters: {
    layout: "centered"
  },
  component: FormActions
};

export const Default = () => {
  const handleSave = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  };

  const handleCancel = () => {
    console.log("Cancel");
  };

  const handleDelete = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  };

  return (
    <div>
      <FormActions
        onSave={handleSave}
        onCancel={handleCancel}
        onDelete={handleDelete}
      />
    </div>
  );
};

export const NoDelete = () => {
  return (
    <div>
      <FormActions onSave={() => {}} onCancel={() => {}} />
    </div>
  );
};
