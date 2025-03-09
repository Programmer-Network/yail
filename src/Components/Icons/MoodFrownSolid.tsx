import type { SVGProps } from "react";

const SvgMoodFrownSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0M4 6h1V5H4zm1.82 5.035a7.28 7.28 0 0 1 4.368-1.092l.498.035.07-.998-.5-.034a8.28 8.28 0 0 0-4.966 1.241l-.424.266.531.847zM11 6h-1V5h1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMoodFrownSolid;
