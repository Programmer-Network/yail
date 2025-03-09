import type { SVGProps } from "react";

const SvgBottomLeftSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M13.854 1.854 2.707 13H7v1H1V8h1v4.293L13.146 1.146z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBottomLeftSolid;
