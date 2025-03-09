import type { SVGProps } from "react";

const SvgGarageSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.21.093a.5.5 0 0 1 .58 0l7 5A.5.5 0 0 1 15 5.5v9a.5.5 0 0 1-.5.5H13V7H2v8H.5a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .21-.407z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3 15h9v-4H3zm6-2H6v-1h3z'
      clipRule='evenodd'
    />
    <path fill='currentColor' d='M12 10V8H3v2z' />
  </svg>
);
export default SvgGarageSolid;
