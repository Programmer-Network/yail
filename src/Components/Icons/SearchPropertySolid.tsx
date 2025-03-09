import type { SVGProps } from "react";

const SvgSearchPropertySolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M5 8V6.207l1.5-1.5 1.5 1.5V8z' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 6.5a6.5 6.5 0 1 1 11.436 4.23l3.418 3.416-.707.707-3.418-3.417A6.5 6.5 0 0 1 0 6.5m8.854-.854-2-2a.5.5 0 0 0-.708 0l-2 2A.5.5 0 0 0 4 6v2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.146-.354'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSearchPropertySolid;
