import type { SVGProps } from "react";

const SvgSendDownSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1h13v1H1zm7 2v9.293l3.146-3.147.708.708L7.5 14.207 3.146 9.854l.708-.708L7 12.293V3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSendDownSolid;
