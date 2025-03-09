import type { SVGProps } from "react";

const SvgMessengerSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.196C0 3.2 3.379 0 7.5 0S15 3.201 15 7.196s-3.379 7.195-7.5 7.195a7.8 7.8 0 0 1-2.72-.489l-2.242 1.05a.5.5 0 0 1-.694-.583l.526-1.932C.918 11.129 0 9.269 0 7.196m8.516 1.441 3.304-2.753-.64-.768-2.696 2.247L6.507 5.88 2.71 8.593l.582.814L6.493 7.12z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMessengerSolid;
