import type { SVGProps } from "react";

const SvgIconEraser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 24 24'
    {...props}
  >
    <path fill='none' d='M0 0h24v24H0z' />
    <path d='m8.586 8.858-4.95 4.95 5.194 5.194H10V19h1.172l3.778-3.778zM10 7.444l6.364 6.364 2.828-2.829-6.364-6.364zM14 19h7v2h-9l-3.998.002-6.487-6.487a1 1 0 0 1 0-1.414L12.12 2.494a1 1 0 0 1 1.415 0l7.778 7.778a1 1 0 0 1 0 1.414z' />
  </svg>
);
export default SvgIconEraser;
