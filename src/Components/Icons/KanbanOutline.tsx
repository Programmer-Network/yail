import type { SVGProps } from "react";

const SvgKanbanOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M.5 3.5V3a.5.5 0 0 0-.5.5zm6 0H7a.5.5 0 0 0-.5-.5zm0 11v.5a.5.5 0 0 0 .5-.5zm-6 0H0a.5.5 0 0 0 .5.5zm8-11V3a.5.5 0 0 0-.5.5zm6 0h.5a.5.5 0 0 0-.5-.5zm0 6v.5a.5.5 0 0 0 .5-.5zm-6 0H8a.5.5 0 0 0 .5.5zM0 1h7V0H0zm8 0h7V0H8zM.5 4h6V3h-6zM6 3.5v11h1v-11zM6.5 14h-6v1h6zm-5.5.5v-11H0v11zM8.5 4h6V3h-6zm5.5-.5v6h1v-6zm.5 5.5h-6v1h6zM9 9.5v-6H8v6z'
    />
  </svg>
);
export default SvgKanbanOutline;
