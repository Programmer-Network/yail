import type { SVGProps } from "react";

const SvgPrintSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M3 1.5A1.5 1.5 0 0 1 4.5 0h6A1.5 1.5 0 0 1 12 1.5V5H3zM1.5 6A1.5 1.5 0 0 0 0 7.5v4A1.5 1.5 0 0 0 1.5 13H2V9h11v4h.5a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 13.5 6z'
    />
    <path fill='currentColor' d='M3 10h9v5H3z' />
  </svg>
);
export default SvgPrintSolid;
