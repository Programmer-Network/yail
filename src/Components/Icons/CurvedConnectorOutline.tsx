import type { SVGProps } from "react";

const SvgCurvedConnectorOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M2.5 1.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 0h2a3 3 0 0 1 3 3v6a3 3 0 0 0 3 3h2m0 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z'
    />
  </svg>
);
export default SvgCurvedConnectorOutline;
