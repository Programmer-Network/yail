import type { SVGProps } from "react";

const SvgPauseSmallSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M6 10V5h1v5zm2 0V5h1v5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPauseSmallSolid;
