import type { SVGProps } from "react";

const SvgPinOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='square'
      d='M7.5 8.495a2 2 0 0 0 2-1.999 2 2 0 0 0-4 0 2 2 0 0 0 2 1.999Z'
      clipRule='evenodd'
    />
    <path
      stroke='currentColor'
      strokeLinecap='square'
      d='M13.5 6.496c0 4.997-5 7.995-6 7.995s-6-2.998-6-7.995A6 6 0 0 1 7.5.5c3.313 0 6 2.685 6 5.996Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPinOutline;
