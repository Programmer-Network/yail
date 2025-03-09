import type { SVGProps } from "react";

const SvgLocationSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8 1.018V0H7v1.018a6.5 6.5 0 0 0-5.981 5.977H0v1h1.019A6.51 6.51 0 0 0 7 13.981V15h1v-1.019a6.51 6.51 0 0 0 5.981-5.986H15v-1h-1.019A6.5 6.5 0 0 0 8 1.018M8 3v3.995h4v1H8V12H7V7.995H3v-1h4V3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgLocationSolid;
