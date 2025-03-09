import type { SVGProps } from "react";

const SvgImageAltSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M11 4h-1V3h1z' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 1.5A1.5 1.5 0 0 1 1.5 0h12A1.5 1.5 0 0 1 15 1.5v12.01A1.5 1.5 0 0 1 13.5 15h-12A1.5 1.5 0 0 1 0 13.5zm14 6.787-2.5-2.498-2.959 2.956L4.5 3.696 1 8.074V1.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgImageAltSolid;
