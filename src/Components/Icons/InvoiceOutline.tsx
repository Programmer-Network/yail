import type { SVGProps } from "react";

const SvgInvoiceOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M4.5 6.995H4v1h.5zm6 1h.5v-1h-.5zM4.5 9.5H4v.5h.5zm6 0v.5h.5v-.5zm-6-4V5H4v.5zm6 0h.5V5h-.5zm3-2h.5v-.207l-.146-.147zm-3-3 .354-.354L10.707 0H10.5zm-6 7.495h6v-1h-6zM4.5 10h6V9h-6zm0-4h6V5h-6zm8 8h-10v1h10zM2 13.5v-12H1v12zm11-10v10h1v-10zM2.5 1h8V0h-8zm7.646-.146 3 3 .708-.708-3-3zM2.5 14a.5.5 0 0 1-.5-.5H1A1.5 1.5 0 0 0 2.5 15zm10 1a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zm2 4v4h1v-4zm3 0v4h1v-4zm3 0v4h1v-4zM4 4h3V3H4zm4 8h3v-1H8z'
    />
  </svg>
);
export default SvgInvoiceOutline;
