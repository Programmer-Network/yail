import type { SVGProps } from "react";

const SvgHtml5Outline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M.5.5V0a.5.5 0 0 0-.498.542zm14 0 .498.042A.5.5 0 0 0 14.5 0zm-1 12 .158.474a.5.5 0 0 0 .34-.433zm-6 2-.158.474a.5.5 0 0 0 .316 0zm-6-2-.498.041a.5.5 0 0 0 .34.433zm3-9V3H4v.5zm0 3H4V7h.5zm6 0h.5V6h-.5zm0 3 .158.474L11 9.86V9.5zm-3 1-.158.474.158.053.158-.053zm-3-1H4v.36l.342.114zM.5 1h14V0H.5zM14.002.458l-1 12 .996.083 1-12zm-.66 11.568-6 2 .316.948 6-2zm-5.684 2-6-2-.316.948 6 2zm-5.66-1.567-1-12-.996.083 1 12zM11 3H4.5v1H11zm-7 .5v3h1v-3zM4.5 7h6V6h-6zm5.5-.5v3h1v-3zm.342 2.526-3 1 .316.948 3-1zm-2.684 1-3-1-.316.948 3 1zM5 9.5V8H4v1.5z'
    />
  </svg>
);
export default SvgHtml5Outline;
