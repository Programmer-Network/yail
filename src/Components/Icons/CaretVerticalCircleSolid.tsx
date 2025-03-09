import type { SVGProps } from "react";

const SvgCaretVerticalCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0M11 6 7.5 3.375 4 6zM4 9l3.5 2.625L11 9z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCaretVerticalCircleSolid;
