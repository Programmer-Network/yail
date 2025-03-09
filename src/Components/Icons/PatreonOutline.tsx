import type { SVGProps } from "react";

const SvgPatreonOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M2.5.5h-2v14h2zM4.5 5.5a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z'
    />
  </svg>
);
export default SvgPatreonOutline;
