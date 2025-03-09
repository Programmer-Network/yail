import type { SVGProps } from "react";

const SvgTerminalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m3.5 4.5 3 3-3 3m4.5 0h4m-10.5-9h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z'
    />
  </svg>
);
export default SvgTerminalOutline;
