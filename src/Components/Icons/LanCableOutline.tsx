import type { SVGProps } from "react";

const SvgLanCableOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M6.5 11.5V15m2-3.5V15M6 9.5h3M6.5.5v2h2v-2m-4 0h6v4h1v3l-2 4h-4l-2-4v-3h1zm2 4v2a1 1 0 0 0 2 0v-2z'
    />
  </svg>
);
export default SvgLanCableOutline;
