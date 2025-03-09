import type { SVGProps } from "react";

const SvgPageNumberSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM10.5 9A1.5 1.5 0 0 0 9 10.5h1a.5.5 0 0 1 .5-.5h.293a.207.207 0 0 1 .146.354l-1.793 1.792A.5.5 0 0 0 9.5 13H12v-1h-1.293l.94-.94A1.207 1.207 0 0 0 10.793 9z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPageNumberSolid;
