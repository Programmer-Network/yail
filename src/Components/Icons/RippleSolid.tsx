import type { SVGProps } from "react";

const SvgRippleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='m4.193 5.155-3.06-3.316.734-.678 3.061 3.316a3.5 3.5 0 0 0 5.144 0l3.06-3.316.735.678-3.06 3.316a4.5 4.5 0 0 1-6.614 0m5.879 5.368a3.5 3.5 0 0 0-5.144 0l-3.06 3.316-.735-.678 3.06-3.316a4.5 4.5 0 0 1 6.614 0l3.06 3.316-.734.678z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgRippleSolid;
