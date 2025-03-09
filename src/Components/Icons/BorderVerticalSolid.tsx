import type { SVGProps } from "react";

const SvgBorderVerticalSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M2 2H1V1h1zm3 0H4V1h1zm2 12V1h1v13zm4-12h-1V1h1zm3 0h-1V1h1zM2 5H1V4h1zm12 0h-1V4h1zM2 8H1V7h1zm3 0H4V7h1zm6 0h-1V7h1zm3 0h-1V7h1zM2 11H1v-1h1zm12 0h-1v-1h1zM2 14H1v-1h1zm3 0H4v-1h1zm6 0h-1v-1h1zm3 0h-1v-1h1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBorderVerticalSolid;
