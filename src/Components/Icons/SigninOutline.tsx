import type { SVGProps } from "react";

const SvgSigninOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m10.5 7.5-3 3.25m3-3.25-3-3m3 3H1m6-6h6.5v12H7'
    />
  </svg>
);
export default SvgSigninOutline;
