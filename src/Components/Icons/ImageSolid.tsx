import type { SVGProps } from "react";

const SvgImageSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M10.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 1.5A1.5 1.5 0 0 1 1.5 0h12A1.5 1.5 0 0 1 15 1.5v12a1.5 1.5 0 0 1-.178.71A1.5 1.5 0 0 1 13.5 15h-12A1.5 1.5 0 0 1 0 13.5zm4.85 1.642-.35-.35-3.5 3.5V1.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5V10h-2.293L4.854 3.146z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgImageSolid;
