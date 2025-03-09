import type { SVGProps } from "react";

const SvgTextDocumentOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M4.5 6.995H4v1h.5zm6 1h.5v-1h-.5zm-6 1.998H4v1h.5zm6 1.007h.5v-1h-.5zm-6-7.003H4v1h.5zM8.5 5H9V4h-.5zm2-4.5.354-.354L10.707 0H10.5zm3 3h.5v-.207l-.146-.147zm-9 4.495h6v-1h-6zm0 2.998 6 .007v-1l-6-.007zm0-5.996L8.5 5V4l-4-.003zm8 9.003h-10v1h10zM2 13.5v-12H1v12zM2.5 1h8V0h-8zM13 3.5v10h1v-10zM10.146.854l3 3 .708-.708-3-3zM2.5 14a.5.5 0 0 1-.5-.5H1A1.5 1.5 0 0 0 2.5 15zm10 1a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5z'
    />
  </svg>
);
export default SvgTextDocumentOutline;
