import type { SVGProps } from "react";

const SvgLockCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.5 4A1.5 1.5 0 0 0 6 5.5V6h3v-.5A1.5 1.5 0 0 0 7.5 4'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5 0a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15M5 5.5v.585A1.5 1.5 0 0 0 4 7.5v3A1.5 1.5 0 0 0 5.5 12h4a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1-1.415V5.5a2.5 2.5 0 0 0-5 0'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgLockCircleSolid;
