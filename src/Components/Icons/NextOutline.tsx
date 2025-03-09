import type { SVGProps } from "react";

const SvgNextOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m1.5 2.5.29-.407A.5.5 0 0 0 1 2.5zm0 10H1a.5.5 0 0 0 .79.407zm7-5 .29.407a.5.5 0 0 0 0-.814zM1 2.5v10h1v-10zm.79 10.407 7-5-.58-.814-7 5zm7-5.814-7-5-.58.814 7 5zM13 2v11h1V2z'
    />
  </svg>
);
export default SvgNextOutline;
