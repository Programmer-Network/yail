import type { SVGProps } from "react";

const SvgBracketOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M0 7.5h2m13 0h-2m-8 7H3.5a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H5m5 14h1.5a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2H10'
    />
  </svg>
);
export default SvgBracketOutline;
