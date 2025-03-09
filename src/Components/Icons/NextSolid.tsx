import type { SVGProps } from "react";

const SvgNextSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.79 2.093A.5.5 0 0 0 1 2.5v10a.5.5 0 0 0 .79.407l7-5a.5.5 0 0 0 0-.814zM13 13h1V2h-1z'
    />
  </svg>
);
export default SvgNextSolid;
