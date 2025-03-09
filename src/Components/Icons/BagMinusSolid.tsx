import type { SVGProps } from "react";

const SvgBagMinusSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.5 1A2.5 2.5 0 0 0 5 3.5V4H4v-.5a3.5 3.5 0 1 1 7 0V4h-1v-.5A2.5 2.5 0 0 0 7.5 1'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3.395 5a1.5 1.5 0 0 0-1.49 1.334l-.778 7A1.5 1.5 0 0 0 2.617 15h9.766a1.5 1.5 0 0 0 1.49-1.666l-.777-7A1.5 1.5 0 0 0 11.606 5zM5 9v1h5V9z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBagMinusSolid;
