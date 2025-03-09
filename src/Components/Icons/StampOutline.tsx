import type { SVGProps } from "react";

const SvgStampOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M0 14.5h15m-8.5-8v3m2-3v3m-1-3a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm-7 6v-1a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1z'
    />
  </svg>
);
export default SvgStampOutline;
