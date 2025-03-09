import type { SVGProps } from "react";

const SvgLinuxSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M5 8V7h1v1zM9 8V7h1v1z' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 6.5a6.5 6.5 0 0 1 13 0v6.514c0 .179.07.35.197.476l.657.656A.5.5 0 0 1 14.5 15H.5a.5.5 0 0 1-.354-.854l.657-.656A.67.67 0 0 0 1 13.014zm3 0a1.5 1.5 0 1 1 3 0v1a1.5 1.5 0 1 1-3 0zm4 0a1.5 1.5 0 1 1 3 0v1a1.5 1.5 0 0 1-3 0zm-3.407 4.012a6.5 6.5 0 0 1 5.814 0l.249.125-.095.095a4.33 4.33 0 0 1-6.122 0l-.095-.095z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgLinuxSolid;
