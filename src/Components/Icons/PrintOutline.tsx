import type { SVGProps } from "react";

const SvgPrintOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M3.5 12.5h-2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2m-8-6v-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5m-8 4h8v4h-8z'
    />
  </svg>
);
export default SvgPrintOutline;
