import type { SVGProps } from "react";

const SvgEthereumSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5 0a.5.5 0 0 1 .384.18l5 6a.5.5 0 0 1 .04.585l-5 8a.5.5 0 0 1-.848 0l-5-8a.5.5 0 0 1 .04-.585l5-6A.5.5 0 0 1 7.5 0M3.241 6.742 7.5 5.04l4.259 1.703L7.5 13.557zm7.61-1.44L7.5 3.962l-3.35 1.34L7.5 1.28z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgEthereumSolid;
