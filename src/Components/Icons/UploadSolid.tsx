import type { SVGProps } from "react";

const SvgUploadSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='m7.486.807 3.603 3.326-.678.734L8 2.642V11H7V2.707L4.854 4.854l-.708-.708zM2 13V7H1v7h13V7h-1v6z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgUploadSolid;
