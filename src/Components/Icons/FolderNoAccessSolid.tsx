import type { SVGProps } from "react";

const SvgFolderNoAccessSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.5 6a2.5 2.5 0 0 0-2.086 3.879L8.88 6.414A2.5 2.5 0 0 0 7.5 6M7.5 11c-.51 0-.983-.152-1.379-.414L9.586 7.12A2.5 2.5 0 0 1 7.5 11'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 2.5A1.5 1.5 0 0 1 1.5 1h4.207l2 2H13.5A1.5 1.5 0 0 1 15 4.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5zm4 6a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgFolderNoAccessSolid;
