import type { SVGProps } from "react";

const SvgHeartCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m4.146-2.354a1.914 1.914 0 0 1 2.707 0l.647.647.646-.647a1.914 1.914 0 0 1 2.707 2.708L7.5 11.207 4.146 7.854a1.914 1.914 0 0 1 0-2.708'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgHeartCircleSolid;
