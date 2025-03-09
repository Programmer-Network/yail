import type { SVGProps } from "react";

const SvgArtboardSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M4 0v2h1V0zM10 0v2h1V0zM2 5H0V4h2zM0 11h2v-1H0zM15 5h-2V4h2zM13 11h2v-1h-2zM4 15v-2h1v2zM10 13v2h1v-2zM4.5 4a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z'
    />
  </svg>
);
export default SvgArtboardSolid;
