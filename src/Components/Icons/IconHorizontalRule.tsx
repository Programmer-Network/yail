import type { SVGProps } from "react";
const SvgIconHorizontalRule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 24 24'
    {...props}
  >
    <path fill='none' d='M0 0h24v24H0z' />
    <path fillRule='evenodd' d='M4 11h16v2H4z' />
  </svg>
);
export default SvgIconHorizontalRule;
