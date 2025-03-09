import type { SVGProps } from "react";

const SvgTwitchSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M.5 0a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h2v2.5a.5.5 0 0 0 .825.38L6.685 12H11.5a.5.5 0 0 0 .354-.146l3-3A.5.5 0 0 0 15 8.5v-8a.5.5 0 0 0-.5-.5zM10 8V3h1v5zM7 3v5h1V3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTwitchSolid;
