import type { SVGProps } from "react";
const SvgIconText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 24 24'
    {...props}
  >
    <path d='M5 8h2V6h3.252L7.68 18H5v2h8v-2h-2.252L13.32 6H17v2h2V4H5z' />
  </svg>
);
export default SvgIconText;
