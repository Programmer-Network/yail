import type { SVGProps } from "react";

const Svg360Solid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7 8.5V8h.5a.5.5 0 1 1-.5.5M11.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 0 1 12.787-5.32 1.5 1.5 0 0 1 1.659 2.484C14.802 5.54 15 6.498 15 7.5a7.5 7.5 0 0 1-15 0M13.5 3a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M2 6h1.5l-.9 1.2A.5.5 0 0 0 3 8h.5a.5.5 0 0 1 0 1H2v1h1.5a1.5 1.5 0 0 0 .449-2.932L4.9 5.8a.5.5 0 0 0-.4-.8H2zm5.5-1A1.5 1.5 0 0 0 6 6.5v2A1.5 1.5 0 1 0 7.5 7H7v-.5a.5.5 0 0 1 .5-.5H8V5zM10 6.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0z'
      clipRule='evenodd'
    />
  </svg>
);
export default Svg360Solid;
