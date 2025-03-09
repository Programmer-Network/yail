import type { SVGProps } from "react";

const SvgListUnorderedSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M2 4H0V3h2zm13 0H4V3h11zM2 8H0V7h2zm13 0H4V7h11zM2 12H0v-1h2zm13 0H4v-1h11z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgListUnorderedSolid;
