import type { SVGProps } from "react";

const SvgIconArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 24 24'
    {...props}
  >
    <path fill='none' d='M0 0h24v24H0z' />
    <path d='M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6z' />
  </svg>
);
export default SvgIconArrowRight;
