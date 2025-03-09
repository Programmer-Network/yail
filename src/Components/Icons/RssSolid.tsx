import type { SVGProps } from "react";

const SvgRssSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M14 15C14 7.268 7.732 1 0 1V0c8.284 0 15 6.716 15 15z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0'
      clipRule='evenodd'
    />
    <path fill='currentColor' d='M9 15a9 9 0 0 0-9-9v1a8 8 0 0 1 8 8z' />
  </svg>
);
export default SvgRssSolid;
