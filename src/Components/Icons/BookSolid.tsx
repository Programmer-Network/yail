import type { SVGProps } from "react";

const SvgBookSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.5 0a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H3V0z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M4 15h1v-1h6.5a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 11.5 0H4zm7-10H7V4h4z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBookSolid;
