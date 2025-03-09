import type { SVGProps } from "react";

const SvgFaceIdOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M4 6h1V5H4zm6 0h1V5h-1zm.1 2.7a3.25 3.25 0 0 1-5.2 0l-.8.6c1.7 2.267 5.1 2.267 6.8 0zM1 5V2.5H0V5zm1.5-4H5V0H2.5zM1 2.5A1.5 1.5 0 0 1 2.5 1V0A2.5 2.5 0 0 0 0 2.5zM0 10v2.5h1V10zm2.5 5H5v-1H2.5zM0 12.5A2.5 2.5 0 0 0 2.5 15v-1A1.5 1.5 0 0 1 1 12.5zM10 1h2.5V0H10zm4 1.5V5h1V2.5zM12.5 1A1.5 1.5 0 0 1 14 2.5h1A2.5 2.5 0 0 0 12.5 0zM10 15h2.5v-1H10zm5-2.5V10h-1v2.5zM12.5 15a2.5 2.5 0 0 0 2.5-2.5h-1a1.5 1.5 0 0 1-1.5 1.5z'
    />
  </svg>
);
export default SvgFaceIdOutline;
