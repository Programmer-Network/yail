import type { SVGProps } from "react";

const SvgBorderInnerSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M2 2H1V1h1zm3 0H4V1h1zm2 5H1v1h6v6h1V8h6V7H8V1H7zm4-5h-1V1h1zm3 0h-1V1h1zM2 5H1V4h1zm12 0h-1V4h1zM2 11H1v-1h1zm12 0h-1v-1h1zM2 14H1v-1h1zm3 0H4v-1h1zm6 0h-1v-1h1zm3 0h-1v-1h1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBorderInnerSolid;
