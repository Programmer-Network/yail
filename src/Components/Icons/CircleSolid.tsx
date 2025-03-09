import type { SVGProps } from "react";

const SvgCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.5 0a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15'
    />
  </svg>
);
export default SvgCircleSolid;
