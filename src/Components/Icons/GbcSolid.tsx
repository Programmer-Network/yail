import type { SVGProps } from "react";

const SvgGbcSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M5 6V3h5v2.5a.5.5 0 0 1-.5.5z' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M2 1.5A1.5 1.5 0 0 1 3.5 0h8A1.5 1.5 0 0 1 13 1.5v10A3.5 3.5 0 0 1 9.5 15h-6A1.5 1.5 0 0 1 2 13.5zm2.5.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5A1.5 1.5 0 0 0 11 5.5v-3a.5.5 0 0 0-.5-.5zM5 8v1H4v1h1v1h1v-1h1V9H6V8zm5 0v1h1V8zm-1 3v-1h1v1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgGbcSolid;
