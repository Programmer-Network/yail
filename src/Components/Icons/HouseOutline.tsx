import type { SVGProps } from "react";

const SvgHouseOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m.5 5.5-.29-.407-.21.15V5.5zm7-5 .29-.407a.5.5 0 0 0-.58 0zm7 5h.5v-.257l-.21-.15zm-12 3V8H2v.5zm4 0H7V8h-.5zM1 15V5.5H0V15zM.79 5.907l7-5-.58-.814-7 5zm6.42-5 7 5 .58-.814-7-5zM14 5.5V15h1V5.5zM3 15V8.5H2V15zm-.5-6h4V8h-4zM6 8.5V15h1V8.5zM5 12h1.5v-1H5zm6-4v4h1V8zm2-6v2.5h1V2z'
    />
  </svg>
);
export default SvgHouseOutline;
