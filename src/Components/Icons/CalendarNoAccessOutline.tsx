import type { SVGProps } from "react";

const SvgCalendarNoAccessOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M3.5 0v5m8-5v5m-2 1.5-4 4m-4-8h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Zm6 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z'
    />
  </svg>
);
export default SvgCalendarNoAccessOutline;
