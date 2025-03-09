import type { SVGProps } from "react";

const SvgCaretVerticalSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.5 1.336 2.17 6h10.66zM7.5 13.664 12.83 9H2.17z'
    />
  </svg>
);
export default SvgCaretVerticalSolid;
