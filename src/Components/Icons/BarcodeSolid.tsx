import type { SVGProps } from "react";

const SvgBarcodeSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 13V2h1v11zm5 0V2h1v11zm2 0V2h1v11zm3 0V2h1v11zm4 0V2h1v11z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBarcodeSolid;
