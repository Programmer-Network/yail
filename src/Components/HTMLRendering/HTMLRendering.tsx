import { FC } from "react";

const HTMLRendering: FC<{
  html: string;
}> = ({ html }) => {
  return (
    <div
      className='mt-8 wrap-break-word text-indigo-500'
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
};

export default HTMLRendering;
