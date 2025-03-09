import type { SVGProps } from "react";

const SvgListLayoutSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.5 1A1.5 1.5 0 0 0 0 2.5v2A1.5 1.5 0 0 0 1.5 6h2A1.5 1.5 0 0 0 5 4.5v-2A1.5 1.5 0 0 0 3.5 1zM7 4h8V3H7zM1.5 9A1.5 1.5 0 0 0 0 10.5v2A1.5 1.5 0 0 0 1.5 14h2A1.5 1.5 0 0 0 5 12.5v-2A1.5 1.5 0 0 0 3.5 9zM7 12h8v-1H7z'
    />
  </svg>
);
export default SvgListLayoutSolid;
