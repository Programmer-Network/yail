import type { SVGProps } from "react";

const SvgDenoOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M7.5 14.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0 0v-5H6a2.5 2.5 0 0 1 0-5h1.694a3.495 3.495 0 0 1 3.49 3.301L11.5 13.5M7 9.5h.382c.685 0 1.312-.387 1.618-1m-5-2h1m1 0h1'
    />
  </svg>
);
export default SvgDenoOutline;
