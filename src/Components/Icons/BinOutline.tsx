import type { SVGProps } from "react";

const SvgBinOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M4.5 3V1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V3M0 3.5h15m-13.5 0v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10M7.5 7v5m-3-3v3m6-3v3'
    />
  </svg>
);
export default SvgBinOutline;
