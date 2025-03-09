import type { SVGProps } from "react";

const SvgSimSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M9.707 0H2.5A1.5 1.5 0 0 0 1 1.5v12A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V4.293zM7 6H4V5h4v7H7zM6 9H4V8h2zm-2 3h2v-1H4zm7-6H9V5h2zM9 9h2V8H9zm2 3H9v-1h2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSimSolid;
