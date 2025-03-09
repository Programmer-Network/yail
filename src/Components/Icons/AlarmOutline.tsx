import type { SVGProps } from "react";

const SvgAlarmOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m.5 3.5 3-3m8 0 3 3M7.5 5v3.5H10m-2.5-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z'
    />
  </svg>
);
export default SvgAlarmOutline;
