import type { SVGProps } from "react";

const SvgThumbtackSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M8.702 1.41 8.146.853l.708-.708 6 6-.707.708-.556-.556-4.456 7.13.719.718-.708.708L5 10.707.854 14.854l-.708-.707L4.293 10 .146 5.854l.708-.708.718.72z'
    />
  </svg>
);
export default SvgThumbtackSolid;
