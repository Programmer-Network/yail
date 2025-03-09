import type { SVGProps } from "react";

const SvgFoldersOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M3.5 8.5v-7a1 1 0 0 1 1-1h3l2 2h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-9m-1-1a1 1 0 0 0 1 1m-1-1v-3h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4h-7'
    />
  </svg>
);
export default SvgFoldersOutline;
