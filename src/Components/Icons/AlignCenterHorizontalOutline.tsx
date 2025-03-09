import type { SVGProps } from "react";

const SvgAlignCenterHorizontalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M7.5 0v3.5m0 8V15m0-8.5v2M4 3.5v3h7v-3zm-2.5 5v3h12v-3z'
    />
  </svg>
);
export default SvgAlignCenterHorizontalOutline;
