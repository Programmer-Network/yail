import type { SVGProps } from "react";

const SvgInfoOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7 1.5V2h1v-.5zm1-.01v-.5H7v.5zM8 13.5V4H7v9.5zm0-12v-.01H7v.01zM4 5h3.5V4H4zm-2 9h11v-1H2z'
    />
  </svg>
);
export default SvgInfoOutline;
