import type { SVGProps } from "react";

const SvgZoomInSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 6.5a6.5 6.5 0 1 1 11.436 4.23l3.418 3.416-.707.708-3.418-3.418A6.5 6.5 0 0 1 0 6.5M6 9V7H4V6h2V4h1v2h2v1H7v2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgZoomInSolid;
