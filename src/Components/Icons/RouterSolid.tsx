import type { SVGProps } from "react";

const SvgRouterSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5 1C5.04 1 2.658 2.17.886 4.318l-.772-.636C2.055 1.329 4.71 0 7.5 0c2.79 0 5.445 1.33 7.386 3.682l-.772.636C12.342 2.17 9.96 1 7.5 1m0 3c-1.583 0-3.126.762-4.28 2.161l-.772-.636C3.768 3.924 5.583 3 7.5 3s3.732.924 5.052 2.525l-.771.636C10.626 4.761 9.083 4 7.5 4M7 9V6h1v3h6v6H1V9z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgRouterSolid;
