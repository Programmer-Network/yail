import type { SVGProps } from "react";

const SvgAdjustVerticalSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M2 0v6H0v3h2v6h1V9h2V6H3V0zM5 10h2V0h1v10h2v3H8v2H7v-2H5zM12 0v2h-2v3h2v10h1V5h2V2h-2V0z'
    />
  </svg>
);
export default SvgAdjustVerticalSolid;
