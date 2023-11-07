import { action } from "@storybook/addon-actions";
import { useState } from "react";

import { ImageSelector } from ".";

export default {
  title: "Core / ImageSelector"
};

export const Primary = () => {
  const value =
    "https://images.immediate.co.uk/production/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg?quality=90&resize=800,534";

  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png"
    },
    {
      id: 2,
      url: "https://imagedelivery.net/mG9yIKlH_7CYi04eBXEpYg/e097c28d-933b-4b02-5415-17319b236e00/public"
    },
    {
      id: 3,
      url: "https://images.immediate.co.uk/production/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg?quality=90&resize=800,534"
    }
  ]);

  const handleSelected = image => {
    action("onSelected")(image);
  };

  const handleDelete = ({ id }) => {
    return new Promise(resolve => {
      setTimeout(() => {
        setTimeout(() => {
          setImages(images.filter(i => i.id !== id));
          resolve(images.filter(i => i !== id));
          action("onSelected")(images);
        }, 2000);
      }, 2000);
    });
  };

  return (
    <div className='mx-auto my-6 w-full px-4 sm:max-w-5xl md:max-w-4xl lg:max-w-5xl lg:px-8'>
      <ImageSelector
        images={images}
        value={value}
        onSelected={handleSelected}
        onDelete={handleDelete}
      />
    </div>
  );
};
