import type { SVGProps } from "react";

const SvgIconTarget = (props: SVGProps<SVGSVGElement>) => (
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
      <path d='M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0' />
      <path d='M12 7a5 5 0 1 0 5 5' />
      <path d='M13 3.055A9 9 0 1 0 20.941 11' />
      <path d='M15 6v3h3l3-3h-3V3zm0 3-3 3' />
    </g>
  </svg>
);
export default SvgIconTarget;
