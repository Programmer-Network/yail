import type { SVGProps } from "react";

const SvgLockSmallSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M10 5.5v.585A1.5 1.5 0 0 1 11 7.5v3A1.5 1.5 0 0 1 9.5 12h-4A1.5 1.5 0 0 1 4 10.5v-3a1.5 1.5 0 0 1 1-1.415V5.5a2.5 2.5 0 0 1 5 0m-4 0a1.5 1.5 0 1 1 3 0V6H6z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgLockSmallSolid;
