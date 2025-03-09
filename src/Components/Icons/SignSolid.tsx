import type { SVGProps } from "react";

const SvgSignSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1v2H0v1h1v11h1V4h4v2H4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5H13V4h2V3H2V1zm6 5V4h5v2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSignSolid;
