import type { SVGProps } from "react";

const SvgBorderOuterSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1h13v13H1zm1 1v11h11V2zm6 3H7V4h1zM5 8H4V7h1zm3 0H7V7h1zm3 0h-1V7h1zm-3 3H7v-1h1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBorderOuterSolid;
