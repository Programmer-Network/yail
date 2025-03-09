import type { SVGProps } from "react";

const SvgSdCardOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M6.5 3v3m2-3v3m2-3v3m-8 8.5h10a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-7l-4 4v9a1 1 0 0 0 1 1Z'
    />
  </svg>
);
export default SvgSdCardOutline;
