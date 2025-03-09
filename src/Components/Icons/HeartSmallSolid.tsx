import type { SVGProps } from "react";

const SvgHeartSmallSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M6.765 5.235a1.79 1.79 0 1 0-2.53 2.53L7.5 11.03l3.265-3.265a1.79 1.79 0 0 0-2.53-2.53L7.5 5.97z'
    />
  </svg>
);
export default SvgHeartSmallSolid;
