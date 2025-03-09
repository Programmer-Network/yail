import type { SVGProps } from "react";

const SvgImageOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m4.5 3.5.354-.354a.5.5 0 0 0-.708 0zM1.5 1h12V0h-12zm12.5.5v12h1v-12zM13.5 14h-12v1h12zM1 13.5v-12H0v12zm.5.5a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 15zm12.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zM13.5 1a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 13.5 0zm-12-1A1.5 1.5 0 0 0 0 1.5h1a.5.5 0 0 1 .5-.5zm-1 11h14v-1H.5zm.354-3.146 4-4-.708-.708-4 4zm3.292-4 7 7 .708-.708-7-7zM10.5 5a.5.5 0 0 1-.5-.5H9A1.5 1.5 0 0 0 10.5 6zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 12 4.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 10.5 3zm0-1A1.5 1.5 0 0 0 9 4.5h1a.5.5 0 0 1 .5-.5z'
    />
  </svg>
);
export default SvgImageOutline;
