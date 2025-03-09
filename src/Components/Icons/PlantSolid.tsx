import type { SVGProps } from "react";

const SvgPlantSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7 4.5A4.5 4.5 0 0 1 11.5 0H15v3.5A4.5 4.5 0 0 1 10.5 8H8v7H7v-4H4.5A4.5 4.5 0 0 1 0 6.5V3h3.5c1.414 0 2.675.652 3.5 1.671zm1.146 1.646 3-3 .708.708-3 3zm-2 3.708-3-3 .708-.708 3 3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPlantSolid;
