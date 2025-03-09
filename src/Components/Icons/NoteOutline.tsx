import type { SVGProps } from "react";

const SvgNoteOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M10.5 14.5H10a.5.5 0 0 0 .854.354zm0-4V10a.5.5 0 0 0-.5.5zm4 0 .354.354A.5.5 0 0 0 14.5 10zM1.5 1h12V0h-12zM1 13.5v-12H0v12zm13-12v8.586h1V1.5zM10.086 14H1.5v1h8.586zm3.768-3.56-3.415 3.414.707.707 3.415-3.415zM10.086 15a1.5 1.5 0 0 0 1.06-.44l-.707-.706a.5.5 0 0 1-.353.146zM14 10.086a.5.5 0 0 1-.146.353l.707.707a1.5 1.5 0 0 0 .439-1.06zM0 13.5A1.5 1.5 0 0 0 1.5 15v-1a.5.5 0 0 1-.5-.5zM13.5 1a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 13.5 0zm-12-1A1.5 1.5 0 0 0 0 1.5h1a.5.5 0 0 1 .5-.5zM11 14.5v-4h-1v4zm-.5-3.5h4v-1h-4zm3.646-.854-4 4 .708.708 4-4zM3 4h9V3H3z'
    />
  </svg>
);
export default SvgNoteOutline;
