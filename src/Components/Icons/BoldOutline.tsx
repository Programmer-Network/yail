import type { SVGProps } from "react";

const SvgBoldOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M3.5 7.5h5a3 3 0 1 0 0-6H3.58a.08.08 0 0 0-.08.08zm0 0h6a3 3 0 1 1 0 6H3.59a.09.09 0 0 1-.09-.09z'
    />
  </svg>
);
export default SvgBoldOutline;
