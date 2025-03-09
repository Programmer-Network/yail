import type { SVGProps } from "react";

const SvgDropperSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M13.768 1.06a2.5 2.5 0 0 0-3.536 0L7.5 3.794l-.646-.647-.708.708 5 5 .708-.708-.647-.646 2.732-2.732a2.5 2.5 0 0 0 0-3.536zM6.146 6.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708L2.707 15H.5a.5.5 0 0 1-.5-.5v-2.207z'
    />
  </svg>
);
export default SvgDropperSolid;
