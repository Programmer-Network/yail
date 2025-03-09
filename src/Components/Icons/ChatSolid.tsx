import type { SVGProps } from "react";

const SvgChatSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.5 0A7.5 7.5 0 0 0 0 7.495a7.5 7.5 0 0 0 7.5 7.496c1.306 0 2.91-.328 4.054-.947l2.79.922a.5.5 0 0 0 .63-.634l-.926-2.771c.672-1.173.952-2.706.952-4.066A7.5 7.5 0 0 0 7.5 0'
    />
  </svg>
);
export default SvgChatSolid;
