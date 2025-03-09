import type { SVGProps } from "react";

const SvgPinAltSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.5 0A4.5 4.5 0 0 0 7 8.973V15h1V8.973A4.5 4.5 0 0 0 7.5 0'
    />
  </svg>
);
export default SvgPinAltSolid;
