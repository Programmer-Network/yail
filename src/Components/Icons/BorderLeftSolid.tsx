import type { SVGProps } from "react";

const SvgBorderLeftSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 14V1h1v13zM5 2H4V1h1zm3 0H7V1h1zm3 0h-1V1h1zm3 0h-1V1h1zM8 5H7V4h1zm6 0h-1V4h1zM5 8H4V7h1zm3 0H7V7h1zm3 0h-1V7h1zm3 0h-1V7h1zm-6 3H7v-1h1zm6 0h-1v-1h1zm-9 3H4v-1h1zm3 0H7v-1h1zm3 0h-1v-1h1zm3 0h-1v-1h1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBorderLeftSolid;
