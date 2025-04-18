import type { SVGProps } from "react";

const SvgFilterSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M15 3H0V2h15zm-3 5H3V7h9zm-2 5H5v-1h5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgFilterSolid;
