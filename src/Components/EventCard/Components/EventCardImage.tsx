import { FC } from "react";

interface IEventCardImage {
  src: string;
  alt: string;
  lazy?: boolean;
}

const EventCardImage: FC<IEventCardImage> = ({ src, alt, lazy = true }) => {
  return (
    <div className='yl:relative yl:h-48 yl:w-full yl:overflow-hidden'>
      <img
        src={src}
        alt={alt}
        loading={lazy ? "lazy" : "eager"}
        className='yl:h-full yl:w-full yl:object-cover'
      />
    </div>
  );
};

export { EventCardImage };
