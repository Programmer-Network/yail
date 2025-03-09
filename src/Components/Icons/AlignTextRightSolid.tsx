import type { SVGProps } from "react";

const SvgAlignTextRightSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 3h15v1H0zm9 4h6v1H9zm-3 4h9v1H6z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAlignTextRightSolid;
