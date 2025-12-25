import type { SVGProps } from "react";

const SvgIconAwardOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    viewBox='0 0 24 24'
    {...props}
  >
    <g
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
    >
      <path d='M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9' />
      <path d='m12 15 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889M6.802 12l-3.4 5.89L7 17.657l1.598 3.232 3.4-5.889' />
    </g>
  </svg>
);
export default SvgIconAwardOutline;
