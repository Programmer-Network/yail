import type { SVGProps } from "react";

const SvgDollarSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7 1V0h1v1h1.5A3.5 3.5 0 0 1 13 4.5h-1A2.5 2.5 0 0 0 9.5 2h-4a2.5 2.5 0 0 0 0 5h4a3.5 3.5 0 1 1 0 7H8v1H7v-1H5.5A3.5 3.5 0 0 1 2 10.5h1A2.5 2.5 0 0 0 5.5 13h4a2.5 2.5 0 0 0 0-5h-4a3.5 3.5 0 1 1 0-7z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgDollarSolid;
