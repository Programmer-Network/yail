import type { SVGProps } from "react";

const SvgListOrderedSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 2h2v3h1v1H0V5h1V3H0zm15 2H5V3h10zm0 4H5V7h10zM0 11.5A1.5 1.5 0 0 1 1.5 10h.293a1.207 1.207 0 0 1 .853 2.06l-.939.94H3v1H.5a.5.5 0 0 1-.354-.854l1.793-1.792A.207.207 0 0 0 1.793 11H1.5a.5.5 0 0 0-.5.5zm15 .5H5v-1h10z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgListOrderedSolid;
