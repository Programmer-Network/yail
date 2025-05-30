import { useState } from "react";

import FormActions from ".";

export default {
  title: "Components/FormActions",
  parameters: {
    layout: "centered"
  },
  component: FormActions,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"]
    },
    layout: {
      control: { type: "select" },
      options: ["horizontal", "vertical"]
    },
    alignment: {
      control: { type: "select" },
      options: ["left", "center", "right", "space-between"]
    },
    saveVariant: {
      control: { type: "select" },
      options: ["primary", "secondary"]
    }
  }
};

export const FuturisticDefault = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    return new Promise<void>(resolve => {
      setTimeout(() => {
        setIsLoading(false);
        resolve();
      }, 2000);
    });
  };

  const handleCancel = () => {
    console.log("Operation cancelled");
  };

  const handleDelete = async () => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  };

  return (
    <div className='yl:w-full yl:max-w-md yl:p-8'>
      <FormActions
        onSave={handleSave}
        onCancel={handleCancel}
        onDelete={handleDelete}
        showDelete={true}
        isSaving={isLoading}
      />
    </div>
  );
};

export const DifferentSizes = () => {
  return (
    <div className='yl:space-y-10 yl:p-8'>
      <div>
        <h3 className='yl:text-sm yl:font-medium yl:mb-4 yl:text-text/70 yl:uppercase yl:tracking-wider'>
          Small Size
        </h3>
        <FormActions
          onSave={() => {}}
          onCancel={() => {}}
          onDelete={() => {}}
          showDelete={true}
          size='small'
        />
      </div>

      <div>
        <h3 className='yl:text-sm yl:font-medium yl:mb-4 yl:text-text/70 yl:uppercase yl:tracking-wider'>
          Medium Size (Default)
        </h3>
        <FormActions
          onSave={() => {}}
          onCancel={() => {}}
          onDelete={() => {}}
          showDelete={true}
          size='medium'
        />
      </div>

      <div>
        <h3 className='yl:text-sm yl:font-medium yl:mb-4 yl:text-text/70 yl:uppercase yl:tracking-wider'>
          Large Size
        </h3>
        <FormActions
          onSave={() => {}}
          onCancel={() => {}}
          onDelete={() => {}}
          showDelete={true}
          size='large'
        />
      </div>
    </div>
  );
};
