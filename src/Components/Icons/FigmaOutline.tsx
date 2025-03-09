import type { SVGProps } from "react";

const SvgFigmaOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M7.5 1v8.5m0 0v2a2 2 0 1 1-2-2m2 0h-2m0 0a2 2 0 1 1 0-4m0 0h2m-2 0h4m-4 0a2 2 0 1 1 0-4h4a2 2 0 1 1 0 4m0 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z'
    />
  </svg>
);
export default SvgFigmaOutline;
