import type { SVGProps } from "react";

const SvgGoogleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M14.5 7.5h.5V7h-.5zm-7 6.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 0A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zm0 1c1.819 0 3.463.746 4.643 1.951l.714-.7A7.48 7.48 0 0 0 7.5 0zM8 8h6.5V7H8z'
    />
  </svg>
);
export default SvgGoogleOutline;
