import type { SVGProps } from "react";

const SvgLayersDifferenceSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M4 4V1.5A1.5 1.5 0 0 1 5.5 0h8A1.5 1.5 0 0 1 15 1.5v8a1.5 1.5 0 0 1-1.5 1.5H11v2.5A1.5 1.5 0 0 1 9.5 15h-8A1.5 1.5 0 0 1 0 13.5v-8A1.5 1.5 0 0 1 1.5 4zm6 1v5H5V5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgLayersDifferenceSolid;
