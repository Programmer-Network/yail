import type { SVGProps } from "react";

const SvgMoodFlatSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0M4 6h1V5H4zm6 0h1V5h-1zm1 3v1H4V9z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMoodFlatSolid;
