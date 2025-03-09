import type { SVGProps } from "react";

const SvgEpsOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M13.5 3.5h.5v-.207l-.146-.147zm-3-3 .354-.354L10.707 0H10.5zm0 6V6H10v.5zm0 2H10V9h.5zm2 0h.5V8h-.5zm0 2v.5h.5v-.5zm-6-4V6H6v.5zm2 0H9V6h-.5zm0 2V9H9v-.5zm-6-2V6H2v.5zm0 4H2v.5h.5zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146 3 3 .708-.708-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5zM13 6h-2.5v1H13zm-3 .5v2h1v-2zm.5 2.5h2V8h-2zm1.5-.5v2h1v-2zm.5 1.5H10v1h2.5zm-6-3h2V6h-2zM8 6.5v2h1v-2zM7 11V8.5H6V11zm0-2.5v-2H6v2zM8.5 8h-2v1h2zM5 6H2.5v1H5zm-3 .5v4h1v-4zm.5 4.5H5v-1H2.5zm0-2H5V8H2.5z'
    />
  </svg>
);
export default SvgEpsOutline;
