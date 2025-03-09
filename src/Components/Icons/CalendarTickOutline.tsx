import type { SVGProps } from "react";

const SvgCalendarTickOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M3.5 0v5m8-5v5M5 8.5l2 2 3.5-4m-9-4h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z'
    />
  </svg>
);
export default SvgCalendarTickOutline;
