/* eslint-disable @eslint-react/dom-no-dangerously-set-innerhtml -- this component's sole purpose is to render caller-provided HTML */
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
