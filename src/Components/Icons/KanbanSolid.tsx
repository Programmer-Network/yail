import type { SVGProps } from "react";

const SvgKanbanSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M0 1h7V0H0zM8 1h7V0H8zM.5 3a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM8.5 3a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z'
    />
  </svg>
);
export default SvgKanbanSolid;
