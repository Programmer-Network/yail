import type { SVGProps } from "react";

const SvgInfoCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M15 7.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0M7 5V3.99h1V5zm1 2v3h1v1H6v-1h1V8H6V7z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgInfoCircleSolid;
