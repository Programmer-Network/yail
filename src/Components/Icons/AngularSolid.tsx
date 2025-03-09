import type { SVGProps } from "react";

const SvgAngularSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M7.5 4.247 9.142 8H5.858z' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.363.02a.5.5 0 0 1 .274 0l7 2a.5.5 0 0 1 .36.535l-1 9a.5.5 0 0 1-.273.392l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.273-.392l-1-9a.5.5 0 0 1 .36-.536zM7.5 1.752l3.958 9.047-.916.4L9.579 9H5.421l-.963 2.2-.916-.4z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAngularSolid;
