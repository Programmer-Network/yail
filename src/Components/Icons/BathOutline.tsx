import type { SVGProps } from "react";

const SvgBathOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M0 7.5h15m-10.5 5h6m-6 0a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h2V2m-2 10.5V15m6-2.5a3 3 0 0 0 3-3v-2m-3 5V15M5 3.5h3'
    />
  </svg>
);
export default SvgBathOutline;
