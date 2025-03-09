import type { SVGProps } from "react";

const SvgMoneyOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M11 10.5h1.5V9M11 4.5h1.5V6M4 4.5H2.5V6m0 3v1.5H4m3.5-1a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-6-7h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z'
    />
  </svg>
);
export default SvgMoneyOutline;
