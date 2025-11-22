import { FC } from "react";

const HTMLRendering: FC<{
  html: string;
}> = ({ html }) => {
  return (
    <div
      className='yl:mt-8 yl:text-indigo-500 wrap-break-word'
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
};

export default HTMLRendering;
