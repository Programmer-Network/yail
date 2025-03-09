import type { SVGProps } from "react";

const SvgAlignCenterHorizontalSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7 0v3H3.5v4H7v1H1v4h6v3h1v-3h6V8H8V7h3.5V3H8V0z'
    />
  </svg>
);
export default SvgAlignCenterHorizontalSolid;
