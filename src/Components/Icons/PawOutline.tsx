import type { SVGProps } from "react";

const SvgPawOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M6.5 3V2a1.5 1.5 0 1 0-3 0v1a1.5 1.5 0 1 0 3 0ZM11.5 3V2a1.5 1.5 0 0 0-3 0v1a1.5 1.5 0 1 0 3 0ZM14.5 7.5V7a1.5 1.5 0 0 0-3 0v.5a1.5 1.5 0 0 0 3 0ZM3.5 7.5V7a1.5 1.5 0 1 0-3 0v.5a1.5 1.5 0 1 0 3 0ZM2.855 11.64l2.918-3.543a2.237 2.237 0 0 1 3.454 0l2.918 3.543c.939 1.14.128 2.86-1.35 2.86-.194 0-.385-.045-.559-.132l-.36-.18a5.32 5.32 0 0 0-4.753 0l-.36.18a1.25 1.25 0 0 1-.558.132c-1.478 0-2.289-1.72-1.35-2.86Z'
    />
  </svg>
);
export default SvgPawOutline;
