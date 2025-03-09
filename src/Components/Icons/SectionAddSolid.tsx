import type { SVGProps } from "react";

const SvgSectionAddSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 1.5A1.5 1.5 0 0 1 1.5 0H4v1H1.5a.5.5 0 0 0-.5.5V4H0zM9 1H6V0h3zm4.5 0H11V0h2.5A1.5 1.5 0 0 1 15 1.5V4h-1V1.5a.5.5 0 0 0-.5-.5M7 7V4h1v3h3v1H8v3H7V8H4V7zM0 9V6h1v3zm14 0V6h1v3zM0 13.5V11h1v2.5a.5.5 0 0 0 .5.5H4v1H1.5A1.5 1.5 0 0 1 0 13.5m14 0V11h1v2.5a1.5 1.5 0 0 1-1.5 1.5H11v-1h2.5a.5.5 0 0 0 .5-.5M9 15H6v-1h3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSectionAddSolid;
