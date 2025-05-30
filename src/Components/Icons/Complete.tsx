import type { SVGProps } from "react";

const SvgComplete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    viewBox='0 0 24 24'
    {...props}
  >
    <g fill='currentColor' fillRule='evenodd' clipRule='evenodd'>
      <path d='M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12' />
      <path d='m17.608 9-7.726 7.726L6 12.093l1.511-1.31 2.476 3.01 6.207-6.207z' />
    </g>
  </svg>
);
export default SvgComplete;
