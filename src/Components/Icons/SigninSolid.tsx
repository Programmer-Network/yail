import type { SVGProps } from "react";

const SvgSigninSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7 1h7v13H7v-1h6V2H7zm.854 3.146 3.34 3.34-3.327 3.603-.734-.678L9.358 8H1V7h8.293L7.146 4.854z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSigninSolid;
