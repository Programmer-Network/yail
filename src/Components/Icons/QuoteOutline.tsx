import type { SVGProps } from "react";

const SvgQuoteOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M1.5 6.5h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1zm0 0V10A3.5 3.5 0 0 0 5 13.5m3.5-7h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1zm0 0V10a3.5 3.5 0 0 0 3.5 3.5'
    />
  </svg>
);
export default SvgQuoteOutline;
