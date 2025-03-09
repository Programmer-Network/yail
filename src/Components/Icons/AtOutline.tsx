import type { SVGProps } from "react";

const SvgAtOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M10.5 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0v1a2 2 0 1 0 4 0v-1a7 7 0 1 0-3 5.745'
    />
  </svg>
);
export default SvgAtOutline;
