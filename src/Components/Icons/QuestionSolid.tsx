import type { SVGProps } from "react";

const SvgQuestionSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3.672 1.62A5.53 5.53 0 0 1 7.585 0h.207C10.122 0 12 1.925 12 4.243a4.15 4.15 0 0 1-2.276 3.704A3.12 3.12 0 0 0 8 10.737V12H7v-1.264c0-1.56.881-2.986 2.276-3.683A3.15 3.15 0 0 0 11 4.243C11 2.465 9.558 1 7.792 1h-.207a4.53 4.53 0 0 0-3.206 1.328l-.525.526-.708-.708zM8 15H7v-1h1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgQuestionSolid;
