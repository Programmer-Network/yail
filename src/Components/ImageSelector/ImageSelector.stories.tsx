import { useState } from "react";
import { action } from "storybook/actions";

import ImageSelector from ".";
import { IImage } from "./types";

export default {
  title: "Components / ImageSelector",
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export const Primary = () => {
  const value = {
    id: 2,
    url: "https://avatars.githubusercontent.com/u/2085261?v=2"
  };

  const [images, setImages] = useState<IImage[]>([
    {
      id: 1,
      url: "https://avatars.githubusercontent.com/u/2085264?v=1"
    },
    {
      id: 2,
      url: "https://avatars.githubusercontent.com/u/2085261?v=2"
    },
    {
      id: 3,
      url: "https://avatars.githubusercontent.com/u/2085268?v=4"
    }
  ]);

  const handleSelected = (image: IImage) => {
    action("onSelected")(image);
  };

  const handleDelete = (image: IImage): Promise<IImage[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        const removed = images.filter(i => i.id !== image.id);
        setImages(removed);
        resolve(removed);
        action("onSelected")(images);
      }, 2000);
    });
  };

  return (
    <div className='yl:mx-auto my-6 yl:w-full yl:px-4 yl:sm:max-w-5xl yl:md:max-w-4xl yl:lg:max-w-5xl yl:lg:px-8'>
      <ImageSelector
        images={images}
        value={value}
        onSelected={handleSelected}
        onDelete={handleDelete}
      />
    </div>
  );
};
