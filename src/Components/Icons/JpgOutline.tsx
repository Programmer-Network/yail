import type { SVGProps } from "react";

const SvgJpgOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M6.5 6.5V6H6v.5zm4 4H10v.5h.5zm2 0v.5h.5v-.5zm1-7h.5v-.207l-.146-.147zm-3-3 .354-.354L10.707 0H10.5zm-6 6H5V6h-.5zm0 4v.5H5v-.5zm-2 0H2v.5h.5zm4-3.5h1V6h-1zm.5 4V8.5H6V11zm0-2.5v-2H6v2zm.5-.5h-1v1h1zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 7.5zM7.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 6zM10 6v4.5h1V6zm.5 5h2v-1h-2zm2.5-.5v-2h-1v2zM10.5 7H13V6h-2.5zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146 3 3 .708-.708-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5zM2 7h2.5V6H2zm2-.5v4h1v-4zm.5 3.5h-2v1h2zm-1.5.5V9H2v1.5z'
    />
  </svg>
);
export default SvgJpgOutline;
