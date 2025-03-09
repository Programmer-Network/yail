import type { SVGProps } from "react";

const SvgFileNoAccessOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m9.5 5.5-4 4m5-9h-8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10zm-3 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z'
    />
  </svg>
);
export default SvgFileNoAccessOutline;
