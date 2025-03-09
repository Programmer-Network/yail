import type { SVGProps } from "react";

const SvgXSmallSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M6.793 7.5 4.146 4.854l.708-.708L7.5 6.793l2.646-2.647.708.708L8.207 7.5l2.647 2.646-.708.707L7.5 8.208l-2.646 2.646-.708-.707z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgXSmallSolid;
