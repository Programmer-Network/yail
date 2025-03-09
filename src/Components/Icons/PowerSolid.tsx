import type { SVGProps } from "react";

const SvgPowerSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8 0v9H7V0zm4.387 1.792.358.35A7.47 7.47 0 0 1 15 7.494C15 11.635 11.644 15 7.5 15 3.358 15 0 11.635 0 7.495 0 5.391.877 3.5 2.269 2.141l.357-.35.7.716-.359.35A6.46 6.46 0 0 0 1 7.494 6.506 6.506 0 0 0 7.5 14c3.59 0 6.5-2.917 6.5-6.505 0-1.818-.748-3.459-1.955-4.639l-.357-.35z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPowerSolid;
