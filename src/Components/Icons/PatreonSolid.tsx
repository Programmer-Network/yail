import type { SVGProps } from "react";

const SvgPatreonSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M3 0H0v15h3zM9.5 0a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11'
    />
  </svg>
);
export default SvgPatreonSolid;
