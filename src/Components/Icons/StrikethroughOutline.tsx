import type { SVGProps } from "react";

const SvgStrikethroughOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M3.5 10A3.5 3.5 0 0 0 7 13.5h1.487a3.013 3.013 0 0 0 3.013-3.013c0-1.205-.892-2.512-2-2.987M6.08 6.177A2.61 2.61 0 0 1 4.5 3.781 2.28 2.28 0 0 1 6.781 1.5H8A2.5 2.5 0 0 1 10.5 4M2 7.5h11'
    />
  </svg>
);
export default SvgStrikethroughOutline;
