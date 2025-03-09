import type { SVGProps } from "react";

const SvgCaretVerticalSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='square'
      d='m10 9-2.5 2L5 9m0-3 2.5-2L10 6'
    />
  </svg>
);
export default SvgCaretVerticalSmallOutline;
