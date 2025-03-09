import type { SVGProps } from "react";

const SvgXlsOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M13.5 3.5h.5v-.207l-.146-.147zm-3-3 .354-.354L10.707 0H10.5zm-4 10H6v.5h.5zm-2-1H5v-.207l-.146-.147zm-2-2H2v.207l.146.147zm8-1V6H10v.5zm0 2H10V9h.5zm2 0h.5V8h-.5zm0 2v.5h.5v-.5zm-10-1-.354-.354L2 9.293V9.5zm2-2 .354.354L5 7.707V7.5zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146 3 3 .708-.708-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5zM6 6v4.5h1V6zm.5 5H9v-1H6.5zM4 9.5V11h1V9.5zm.854-.354-2-2-.708.708 2 2zM3 7.5V6H2v1.5zM13 6h-2.5v1H13zm-3 .5v2h1v-2zm.5 2.5h2V8h-2zm1.5-.5v2h1v-2zm.5 1.5H10v1h2.5zM3 11V9.5H2V11zm-.146-1.146 2-2-.708-.708-2 2zM5 7.5V6H4v1.5z'
    />
  </svg>
);
export default SvgXlsOutline;
