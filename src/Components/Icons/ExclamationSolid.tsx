import type { SVGProps } from "react";

const SvgExclamationSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7 11V1h1v10zm1 2v1.01H7V13z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgExclamationSolid;
