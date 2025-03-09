import type { SVGProps } from "react";

const SvgFolderPlusSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 2.5A1.5 1.5 0 0 1 1.5 1h4.207l2 2H13.5A1.5 1.5 0 0 1 15 4.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5zM7 11V9H5V8h2V6h1v2h2v1H8v2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgFolderPlusSolid;
