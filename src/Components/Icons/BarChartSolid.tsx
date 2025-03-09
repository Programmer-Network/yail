import type { SVGProps } from "react";

const SvgBarChartSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M13 0h1v12h-1zm-3 3v9H9V3zM6 6v6H5V6zm-5 6V9h1v3zm14 3H0v-1h15z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBarChartSolid;
