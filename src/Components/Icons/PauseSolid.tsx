import type { SVGProps } from "react";

const SvgPauseSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M5 12V3h1v9zm4 0V3h1v9z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPauseSolid;
