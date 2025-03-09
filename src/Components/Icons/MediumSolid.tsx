import type { SVGProps } from "react";

const SvgMediumSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 1.5A1.5 1.5 0 0 1 1.5 0h12A1.5 1.5 0 0 1 15 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 13.5zM4 5H3V4h1.5a.5.5 0 0 1 .4.2l2.6 3.467 2.593-3.458A.5.5 0 0 1 10.5 4H12v1h-1v5h1v1H9v-1h1V6L7.5 9.333 5 6v4h1v1H3v-1h1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMediumSolid;
