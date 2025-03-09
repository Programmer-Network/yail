import type { SVGProps } from "react";

const SvgAlignTextCenterSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 3h15v1H0zm5 4h5v1H5zm-2 4h9v1H3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAlignTextCenterSolid;
