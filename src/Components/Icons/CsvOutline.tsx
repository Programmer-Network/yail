import type { SVGProps } from "react";

const SvgCsvOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M13.5 3.5h.5v-.207l-.146-.147zm-3-3 .354-.354L10.707 0H10.5zm-4 6V6H6v.5zm0 2H6V9h.5zm2 0H9V8h-.5zm0 2v.5H9v-.5zm2-1H10v.207l.146.147zm1 1-.354.354.354.353.354-.353zm1-1 .354.354.146-.147V9.5zm-10-3V6H2v.5zm0 4H2v.5h.5zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146 3 3 .708-.708-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5zM9 6H6.5v1H9zm-3 .5v2h1v-2zM6.5 9h2V8h-2zM8 8.5v2h1v-2zm.5 1.5H6v1h2.5zM10 6v3.5h1V6zm.146 3.854 1 1 .708-.708-1-1zm1.708 1 1-1-.708-.708-1 1zM13 9.5V6h-1v3.5zM5 6H2.5v1H5zm-3 .5v4h1v-4zm.5 4.5H5v-1H2.5z'
    />
  </svg>
);
export default SvgCsvOutline;
