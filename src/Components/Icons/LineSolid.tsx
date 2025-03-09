import type { SVGProps } from "react";

const SvgLineSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.5 0a1.5 1.5 0 1 0 .647 2.854l10 10a1.5 1.5 0 1 0 .707-.707l-10-10A1.5 1.5 0 0 0 1.5 0'
    />
  </svg>
);
export default SvgLineSolid;
