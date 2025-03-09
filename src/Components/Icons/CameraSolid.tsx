import type { SVGProps } from "react";

const SvgCameraSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M2 1h5v1H2zM8 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 12.5A1.5 1.5 0 0 0 1.5 14h12a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 13.5 3h-12A1.5 1.5 0 0 0 0 4.5zM9.5 6a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCameraSolid;
