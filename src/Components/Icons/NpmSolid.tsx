import type { SVGProps } from "react";

const SvgNpmSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 4h15v7H7v2H4v-2H0zm4 6V5H1v5h1V6h1v4zm1-5v7h1v-2h2V5zm4 0v5h1V6h1v4h1V6h1v4h1V5zM6 9V6h1v3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgNpmSolid;
