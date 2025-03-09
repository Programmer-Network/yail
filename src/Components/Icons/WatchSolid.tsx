import type { SVGProps } from "react";

const SvgWatchSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M4 3.085V1.5A1.5 1.5 0 0 1 5.5 0h4A1.5 1.5 0 0 1 11 1.5v1.585A1.5 1.5 0 0 1 12 4.5v6a1.5 1.5 0 0 1-1 1.415V13.5A1.5 1.5 0 0 1 9.5 15h-4A1.5 1.5 0 0 1 4 13.5v-1.585A1.5 1.5 0 0 1 3 10.5v-6a1.5 1.5 0 0 1 1-1.415M5 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V3H5zM5 12h5v1.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z'
      clipRule='evenodd'
    />
    <path fill='currentColor' d='M13 6v3h1V6z' />
  </svg>
);
export default SvgWatchSolid;
