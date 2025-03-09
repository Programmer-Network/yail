import type { SVGProps } from "react";

const SvgReceiptOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.5.5V0a.5.5 0 0 0-.5.5zm12 0h.5a.5.5 0 0 0-.5-.5zm0 14-.224.447A.5.5 0 0 0 14 14.5zm-2-1 .224-.447a.5.5 0 0 0-.448 0zm-2 1-.224.447a.5.5 0 0 0 .448 0zm-2-1 .224-.447a.5.5 0 0 0-.448 0zm-2 1-.224.447a.5.5 0 0 0 .448 0zm-4 0H1a.5.5 0 0 0 .724.447zm2-1 .224-.447a.5.5 0 0 0-.448 0zM1.5 1h12V0h-12zM13 .5v14h1V.5zm.724 13.553-2-1-.448.894 2 1zm-2.448-1-2 1 .448.894 2-1zm-1.552 1-2-1-.448.894 2 1zm-2.448-1-2 1 .448.894 2-1zM2 14.5V.5H1v14zm3.724-.447-2-1-.448.894 2 1zm-2.448-1-2 1 .448.894 2-1zM4 5h2V4H4zm4 0h3V4H8zM4 8h2V7H4zm4 0h3V7H8zm0 3h3v-1H8z'
    />
  </svg>
);
export default SvgReceiptOutline;
