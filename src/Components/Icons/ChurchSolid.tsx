import type { SVGProps } from "react";

const SvgChurchSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7 2V0h1v2h2v1H8v2.21l6.748 3.856-.496.868L13 9.22V14h2v1h-5v-5H5v5H0v-1h2V9.219l-1.252.715-.496-.868L7 5.21V3H5V2z'
    />
    <path fill='currentColor' d='M6 15h3v-4H6z' />
  </svg>
);
export default SvgChurchSolid;
