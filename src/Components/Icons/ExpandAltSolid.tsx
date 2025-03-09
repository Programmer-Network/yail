import type { SVGProps } from "react";

const SvgExpandAltSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M12.293 2H10V1h4v4h-1V2.707L9.854 5.854l-.708-.708zm-6.44 7.854L2.708 13H5v1H1v-4h1v2.293l3.146-3.147z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgExpandAltSolid;
