import type { SVGProps } from "react";

const SvgPlayCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m6.249-2.432a.5.5 0 0 1 .5-.002l3.5 2a.5.5 0 0 1 0 .868l-3.5 2A.5.5 0 0 1 6 9.5v-4a.5.5 0 0 1 .249-.432'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPlayCircleSolid;
