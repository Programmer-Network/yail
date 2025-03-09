import type { SVGProps } from "react";

const SvgItalicOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M4 1.5h9m-11 12h9m-2.5-12-2 12' />
  </svg>
);
export default SvgItalicOutline;
