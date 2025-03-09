import type { SVGProps } from "react";

const SvgMessageOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='square'
      strokeLinejoin='round'
      d='m5.5 11.493 2 2.998 2-2.998h4c.553 0 1-.447 1-1V1.5c0-.552-.447-.999-1-.999h-12c-.553 0-1 .447-1 1v8.994c0 .552.447.999 1 .999z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMessageOutline;
