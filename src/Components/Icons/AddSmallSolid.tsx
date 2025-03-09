import type { SVGProps } from "react";

const SvgAddSmallSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7 7V4h1v3h3v1H8v3H7V8H4V7z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAddSmallSolid;
