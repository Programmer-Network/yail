import type { SVGProps } from "react";

const SvgUnderlineSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3 7.5V1h1v6.5a3.5 3.5 0 1 0 7 0V1h1v6.5a4.5 4.5 0 0 1-9 0M13 13v1H2v-1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgUnderlineSolid;
