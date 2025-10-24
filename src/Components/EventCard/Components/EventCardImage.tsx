import { FC } from "react";

interface IEventCardImage {
  src: string;
  alt: string;
  lazy?: boolean;
}

const EventCardImage: FC<IEventCardImage> = ({ src, alt, lazy = true }) => {
  return (
    <div className='relative h-48 w-full overflow-hidden'>
      <img
        src={src}
        alt={alt}
        loading={lazy ? "lazy" : "eager"}
        className='h-full w-full object-cover'
      />
    </div>
  );
};

export default EventCardImage;
