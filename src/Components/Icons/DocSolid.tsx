import type { SVGProps } from "react";

const SvgDocSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M3 10V7h.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5zM7 7.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM3.5 6H2v5h1.5A1.5 1.5 0 0 0 5 9.5v-2A1.5 1.5 0 0 0 3.5 6m4 0A1.5 1.5 0 0 0 6 7.5v2a1.5 1.5 0 0 0 3 0v-2A1.5 1.5 0 0 0 7.5 6m2.5 5V6h3v2h-1V7h-1v3h1V9h1v2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgDocSolid;
