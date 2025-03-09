import type { SVGProps } from "react";

const SvgSortUpSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3.146.146a.5.5 0 0 1 .708 0l3 3-.708.708L4 1.707V15H3V1.707L.854 3.854l-.708-.708zM15 4H9V3h6zm-2 4H9V7h4zm-2 4H9v-1h2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSortUpSolid;
