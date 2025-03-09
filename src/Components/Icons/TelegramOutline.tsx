import type { SVGProps } from "react";

const SvgTelegramOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='m14.5 1.5-14 5 4 2 6-4-4 5 6 4z'
    />
  </svg>
);
export default SvgTelegramOutline;
