import type { SVGProps } from "react";

const SvgBottomRightSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1.854 1.146 13 12.293V8h1v6H8v-1h4.293L1.146 1.854z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBottomRightSolid;
