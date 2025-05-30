import type { SVGProps } from "react";

const SvgIncomplete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    viewBox='0 0 24 24'
    {...props}
  >
    <g fill='currentColor'>
      <path
        fillRule='evenodd'
        d='M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12'
        clipRule='evenodd'
        opacity={0.5}
      />
      <path d='m15.293 7.293-8 8 1.414 1.414 8-8z' />
      <path d='m8.707 7.293 8 8-1.414 1.414-8-8z' />
    </g>
  </svg>
);
export default SvgIncomplete;
