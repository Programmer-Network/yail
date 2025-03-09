import type { SVGProps } from "react";

const SvgImageDocumentOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M13.5 3.5h.5v-.207l-.146-.147zm-3-3 .354-.354L10.707 0H10.5zm1 7.995.354-.353-.353-.354-.354.354zm-3 2.999-.39.312.349.436.394-.395zM4.5 6.5l.39-.313-.403-.503L4.1 6.2zm8 7.5h-10v1h10zM2 13.5v-12H1v12zm11-10v10h1v-10zM2.5 1h8V0h-8zm7.646-.146 3 3 .708-.708-3-3zM2.5 14a.5.5 0 0 1-.5-.5H1A1.5 1.5 0 0 0 2.5 15zm10 1a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM10 6h1V5h-1zm3.854 4.147-2-2.005-.708.707 2 2.004zm-2.707-2.005-3 2.998.706.707 3-2.998zM8.89 11.18l-4-4.994-.78.626 4 4.993zM4.1 6.2l-3 4 .8.6 3-4z'
    />
  </svg>
);
export default SvgImageDocumentOutline;
