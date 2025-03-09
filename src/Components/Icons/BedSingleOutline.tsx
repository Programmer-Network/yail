import type { SVGProps } from "react";

const SvgBedSingleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M14.5 4v11M.5 0v15M0 10.5h15m-15-3h15m-13-2h4'
    />
  </svg>
);
export default SvgBedSingleOutline;
