import type { SVGProps } from "react";

const SvgDoubleCaretLeftOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='square'
      d='M8 1 1 7.5 8 14m5.5-13-7 6.5 7 6.5'
    />
  </svg>
);
export default SvgDoubleCaretLeftOutline;
