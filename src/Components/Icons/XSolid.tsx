import type { SVGProps } from "react";

const SvgXSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M6.793 7.5 1.146 1.854l.708-.708L7.5 6.793l5.647-5.647.707.708L8.207 7.5l5.647 5.646-.707.707L7.5 8.208l-5.646 5.647-.708-.708z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgXSolid;
