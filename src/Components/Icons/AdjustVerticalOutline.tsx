import type { SVGProps } from "react";

const SvgAdjustVerticalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M7.5 12.5V15m5-15v2.5M2.5 0v6.5m0 2V15m5-4.5V0m5 4.5V15m-2-10.5h4v-2h-4zm-5 8h4v-2h-4zm-5-4h4v-2h-4z'
    />
  </svg>
);
export default SvgAdjustVerticalOutline;
