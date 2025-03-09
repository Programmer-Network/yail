import type { SVGProps } from "react";

const SvgBedDoubleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M14.5 7v8M.5 7v8M0 10.5h15m-15-3h15m-13-2h4m3 0h4M.5 6V.5h14V6'
    />
  </svg>
);
export default SvgBedDoubleOutline;
