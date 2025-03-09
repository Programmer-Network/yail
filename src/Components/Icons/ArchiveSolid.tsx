import type { SVGProps } from "react";

const SvgArchiveSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M0 0h15v5H0z' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 6v7.5A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6zm9 3H5V8h5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgArchiveSolid;
