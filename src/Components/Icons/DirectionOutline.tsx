import type { SVGProps } from "react";

const SvgDirectionOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='m.5.5 6 14 2-6 6-2z'
    />
  </svg>
);
export default SvgDirectionOutline;
