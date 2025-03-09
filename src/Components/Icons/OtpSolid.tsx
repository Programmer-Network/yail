import type { SVGProps } from "react";

const SvgOtpSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M3.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5M11 7h.5a.5.5 0 0 0 0-1H11z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 1.5A1.5 1.5 0 0 1 1.5 0h12A1.5 1.5 0 0 1 15 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 13.5zm2 5a1.5 1.5 0 1 1 3 0v2a1.5 1.5 0 1 1-3 0zM7 6H6V5h3v1H8v4H7zm3-1h1.5a1.5 1.5 0 0 1 0 3H11v2h-1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgOtpSolid;
