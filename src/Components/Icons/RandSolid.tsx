import type { SVGProps } from "react";

const SvgRandSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3 1h5a4 4 0 0 1 2.117 7.395A3.5 3.5 0 0 1 12 11.5V14h-1v-2.5A2.5 2.5 0 0 0 8.5 9H4v5H3zm1 7h4a3 3 0 0 0 0-6H4z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgRandSolid;
