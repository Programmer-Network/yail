import type { SVGProps } from "react";

const SvgSaveSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M0 1.5A1.5 1.5 0 0 1 1.5 0h8.586a1.5 1.5 0 0 1 1.06.44l3.415 3.414A1.5 1.5 0 0 1 15 4.914V13.5a1.5 1.5 0 0 1-1.5 1.5H11v-3.5A1.5 1.5 0 0 0 9.5 10h-4A1.5 1.5 0 0 0 4 11.5V15H1.5A1.5 1.5 0 0 1 0 13.5z'
    />
    <path
      fill='currentColor'
      d='M5 15h5v-3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5z'
    />
  </svg>
);
export default SvgSaveSolid;
