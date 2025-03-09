import type { SVGProps } from "react";

const SvgDoubleCaretRightOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='square'
      d='m7 14 7-6.5L7 1M1.5 14l7-6.5-7-6.5'
    />
  </svg>
);
export default SvgDoubleCaretRightOutline;
