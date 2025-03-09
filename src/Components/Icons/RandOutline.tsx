import type { SVGProps } from "react";

const SvgRandOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M3.5 14V8.5m0 0v-7H8a3.5 3.5 0 1 1 0 7zm0 0h5a3 3 0 0 1 3 3V14'
    />
  </svg>
);
export default SvgRandOutline;
