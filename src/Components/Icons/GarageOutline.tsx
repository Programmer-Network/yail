import type { SVGProps } from "react";

const SvgGarageOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m.5 5.5-.29-.407A.5.5 0 0 0 0 5.5zm7-5 .29-.407a.5.5 0 0 0-.58 0zm7 5h.5a.5.5 0 0 0-.21-.407zm-12 2V7H2v.5zm10 0h.5V7h-.5zM1 15V5.5H0V15zM.79 5.907l7-5-.58-.814-7 5zm6.42-5 7 5 .58-.814-7-5zM14 5.5V15h1V5.5zM3 15V7.5H2V15zm-.5-7h10V7h-10zm9.5-.5V15h1V7.5zM2.5 11h10v-1h-10zM6 13h3v-1H6z'
    />
  </svg>
);
export default SvgGarageOutline;
