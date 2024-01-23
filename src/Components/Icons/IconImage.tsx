import type { SVGProps } from "react";

const SvgIconImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 512 512'
    {...props}
  >
    <rect
      width={416}
      height={352}
      x={48}
      y={80}
      fill='none'
      stroke='currentColor'
      strokeLinejoin='round'
      strokeWidth={32}
      rx={48}
      ry={48}
    />
    <circle
      cx={336}
      cy={176}
      r={32}
      fill='none'
      stroke='currentColor'
      strokeMiterlimit={10}
      strokeWidth={32}
    />
    <path
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={32}
      d='m304 335.79-90.66-90.49a32 32 0 0 0-43.87-1.3L48 352m176 80 123.34-123.34a32 32 0 0 1 43.11-2L464 368'
    />
  </svg>
);
export default SvgIconImage;
