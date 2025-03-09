import type { SVGProps } from "react";

const SvgFileNoAccessSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.5 5a2.5 2.5 0 0 0-2.086 3.879L8.88 5.414A2.5 2.5 0 0 0 7.5 5M7.5 10c-.51 0-.983-.152-1.379-.414L9.586 6.12A2.5 2.5 0 0 1 7.5 10'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zm3 6a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgFileNoAccessSolid;
