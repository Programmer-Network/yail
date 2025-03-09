import type { SVGProps } from "react";

const SvgDownloadSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7 9.358V1h1v8.293l2.146-2.147.708.708-3.34 3.34L3.91 7.866l.678-.734zM2 13V7H1v7h13V7h-1v6z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgDownloadSolid;
