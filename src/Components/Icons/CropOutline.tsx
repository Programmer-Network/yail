import type { SVGProps } from "react";

const SvgCropOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M3.5 3.5h8v8m-8-8V0m0 3.5H0m11.5 8h-8V6m8 5.5V15m0-3.5H15'
    />
  </svg>
);
export default SvgCropOutline;
