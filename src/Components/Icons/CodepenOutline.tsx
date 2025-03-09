import type { SVGProps } from "react";

const SvgCodepenOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m7.5.5.29-.407a.5.5 0 0 0-.58 0zm7 5h.5a.5.5 0 0 0-.21-.407zm0 4 .29.407A.5.5 0 0 0 15 9.5zm-7 5-.29.407a.5.5 0 0 0 .58 0zm-7-5H0a.5.5 0 0 0 .21.407zm0-4-.29-.407A.5.5 0 0 0 0 5.5zM7.21.907l7 5 .58-.814-7-5zM14 5.5v4h1v-4zm.21 3.593-7 5 .58.814 7-5zm-6.42 5-7-5-.58.814 7 5zM1 9.5v-4H0v4zM.79 5.907l7-5-.58-.814-7 5zm0 4 7-5-.58-.814-7 5zm6.42-5 7 5 .58-.814-7-5zm-7 1 7 5 .58-.814-7-5zm7.58 5 7-5-.58-.814-7 5zM7 .5v4h1v-4zm0 10v4h1v-4z'
    />
  </svg>
);
export default SvgCodepenOutline;
