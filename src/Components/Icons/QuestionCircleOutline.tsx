import type { SVGProps } from "react";

const SvgQuestionCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M7.5 9V7.5H8A1.5 1.5 0 0 0 9.5 6v-.1a1.4 1.4 0 0 0-1.4-1.4h-.6A1.5 1.5 0 0 0 6 6m1 4.5h1m-.5 4a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z'
    />
  </svg>
);
export default SvgQuestionCircleOutline;
