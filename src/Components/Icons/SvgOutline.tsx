import type { SVGProps } from "react";

const SvgSvgOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M13.5 3.5h.5v-.207l-.146-.147zm-3-3 .354-.354L10.707 0H10.5zm-8 6V6H2v.5zm0 2H2V9h.5zm2 0H5V8h-.5zm0 2v.5H5v-.5zm2-1H6v.207l.146.147zm1 1-.354.354.354.353.354-.353zm1-1 .354.354L9 9.707V9.5zm2-3V6H10v.5zm0 4H10v.5h.5zm2 0v.5h.5v-.5zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146 3 3 .708-.708-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5zM5 6H2.5v1H5zm-3 .5v2h1v-2zM2.5 9h2V8h-2zM4 8.5v2h1v-2zm.5 1.5H2v1h2.5zM6 6v3.5h1V6zm.146 3.854 1 1 .708-.708-1-1zm1.708 1 1-1-.708-.708-1 1zM9 9.5V6H8v3.5zM13 6h-2.5v1H13zm-3 .5v4h1v-4zm.5 4.5h2v-1h-2zm2.5-.5v-2h-1v2z'
    />
  </svg>
);
export default SvgSvgOutline;
