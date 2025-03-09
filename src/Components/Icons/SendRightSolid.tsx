import type { SVGProps } from "react";

const SvgSendRightSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 14V1h1v13zM9.854 3.146 14.207 7.5l-4.353 4.354-.708-.708L12.293 8H3V7h9.293L9.146 3.854z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSendRightSolid;
