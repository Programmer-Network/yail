import type { SVGProps } from "react";

const SvgHouseSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.79.093a.5.5 0 0 0-.58 0l-7 5A.5.5 0 0 0 0 5.5v9a.5.5 0 0 0 .5.5H2V8h5v7h7.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.21-.407L14 4.528V2h-1v1.814zM11 12V8h1v4z'
      clipRule='evenodd'
    />
    <path fill='currentColor' d='M6 15v-3H5v-1h1V9H3v6z' />
  </svg>
);
export default SvgHouseSolid;
