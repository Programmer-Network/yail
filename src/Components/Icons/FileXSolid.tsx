import type { SVGProps } from "react";

const SvgFileXSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zm8.146 8.354L7.5 8.207 5.854 9.854l-.708-.708L6.793 7.5 5.146 5.854l.708-.708L7.5 6.793l1.646-1.647.708.708L8.207 7.5l1.647 1.646z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgFileXSolid;
