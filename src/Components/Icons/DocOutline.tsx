import type { SVGProps } from "react";

const SvgDocOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M2.5 6.5V6H2v.5zm0 4H2v.5h.5zm10-4h.5V6h-.5zm0 4v.5h.5v-.5zm1-7h.5v-.207l-.146-.147zm-3-3 .354-.354L10.707 0H10.5zM2 6.5v4h1v-4zm.5 4.5h1v-1h-1zM5 9.5v-2H4v2zM3.5 6h-1v1h1zM5 7.5A1.5 1.5 0 0 0 3.5 6v1a.5.5 0 0 1 .5.5zM3.5 11A1.5 1.5 0 0 0 5 9.5H4a.5.5 0 0 1-.5.5zM6 7.5v2h1v-2zm3 2v-2H8v2zm0-2A1.5 1.5 0 0 0 7.5 6v1a.5.5 0 0 1 .5.5zM7.5 11A1.5 1.5 0 0 0 9 9.5H8a.5.5 0 0 1-.5.5zM6 9.5A1.5 1.5 0 0 0 7.5 11v-1a.5.5 0 0 1-.5-.5zm1-2a.5.5 0 0 1 .5-.5V6A1.5 1.5 0 0 0 6 7.5zM10 6v5h1V6zm.5 1h2V6h-2zm1.5-.5V8h1V6.5zM10.5 11h2v-1h-2zm2.5-.5V9h-1v1.5zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146 3 3 .708-.708-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5z'
    />
  </svg>
);
export default SvgDocOutline;
