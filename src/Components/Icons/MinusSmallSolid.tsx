import type { SVGProps } from "react";

const SvgMinusSmallSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M11 8H4V7h7z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMinusSmallSolid;
