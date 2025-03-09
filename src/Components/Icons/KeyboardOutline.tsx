import type { SVGProps } from "react";

const SvgKeyboardOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M11 11.5H4m7-3h-1m-2 0H7m-2 0H4m7-2h-1m-2 0H7m-2 0H4m3.5-2V0m6 4.5h-12a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Z'
    />
  </svg>
);
export default SvgKeyboardOutline;
