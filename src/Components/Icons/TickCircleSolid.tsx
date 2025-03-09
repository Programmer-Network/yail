import type { SVGProps } from "react";

const SvgTickCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m7.072 3.21 4.318-5.398-.78-.624-3.682 4.601L4.32 7.116l-.64.768z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTickCircleSolid;
