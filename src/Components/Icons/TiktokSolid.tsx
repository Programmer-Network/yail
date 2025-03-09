import type { SVGProps } from "react";

const SvgTiktokSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M9 0h1v1a4 4 0 0 0 4 4v1a5 5 0 0 1-4-2v7a4 4 0 1 1-4-4v1a3 3 0 1 0 3 3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTiktokSolid;
