import type { SVGProps } from "react";

const SvgJoystickSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M4 3.5a3.5 3.5 0 1 1 4 3.465V10h5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5H7V6.965A3.5 3.5 0 0 1 4 3.5'
    />
    <path fill='currentColor' d='M3 8v1h2V8z' />
  </svg>
);
export default SvgJoystickSolid;
