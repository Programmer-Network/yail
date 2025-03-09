import type { SVGProps } from "react";

const SvgStarSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M7.5 9.804 5.337 11l.413-2.533L4 6.674l2.418-.37L7.5 4l1.082 2.304 2.418.37-1.75 1.793L9.663 11z'
    />
  </svg>
);
export default SvgStarSmallOutline;
