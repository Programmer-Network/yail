import type { SVGProps } from "react";

const SvgInfoSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8 .99V2H7V.99zM7 13H2v1h11v-1H8V4H4v1h3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgInfoSolid;
