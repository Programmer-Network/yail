import type { SVGProps } from "react";

const SvgViewColumnSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 15V0h1v15zm4 0V0h1v15zm4 0V0h1v15zm4 0V0h1v15z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgViewColumnSolid;
