import type { SVGProps } from "react";

const SvgExclamationOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M8 13.5V13H7v.5zm-1 .01v.5h1v-.5zM7 1v10h1V1zm0 12.5v.01h1v-.01z'
    />
  </svg>
);
export default SvgExclamationOutline;
