import type { SVGProps } from "react";

const SvgFloatRightOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M0 5.5h6m-6-4h6m-6 8h15m-15 4h15M9.5.5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z'
    />
  </svg>
);
export default SvgFloatRightOutline;
