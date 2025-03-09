import type { SVGProps } from "react";

const SvgFolderXSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 2.5A1.5 1.5 0 0 1 1.5 1h4.207l2 2H13.5A1.5 1.5 0 0 1 15 4.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5zm9.146 8.354L7.5 9.207l-1.646 1.647-.708-.707L6.793 8.5 5.146 6.854l.708-.708L7.5 7.793l1.646-1.647.708.708L8.207 8.5l1.647 1.646z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgFolderXSolid;
