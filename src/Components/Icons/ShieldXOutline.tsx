import type { SVGProps } from "react";

const SvgShieldXOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='m4.5 4.5 6 6m-6 0 6-6m-3-4-7 4v.72a9.65 9.65 0 0 0 7 9.28 9.65 9.65 0 0 0 7-9.28V4.5z'
    />
  </svg>
);
export default SvgShieldXOutline;
