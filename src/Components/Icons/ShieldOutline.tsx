import type { SVGProps } from "react";

const SvgShieldOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m.5 4.5 7-4 7 4v.72a9.65 9.65 0 0 1-7 9.28 9.65 9.65 0 0 1-7-9.28z'
    />
  </svg>
);
export default SvgShieldOutline;
