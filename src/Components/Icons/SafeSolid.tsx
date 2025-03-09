import type { SVGProps } from "react";

const SvgSafeSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M8 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1.5 0A1.5 1.5 0 0 0 0 1.5v11A1.5 1.5 0 0 0 1.5 14H2v1h1v-1h9v1h1v-1h.5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 0zM2 3v3h1V3zm7.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M2 11V8h1v3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSafeSolid;
