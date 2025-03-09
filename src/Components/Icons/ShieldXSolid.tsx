import type { SVGProps } from "react";

const SvgShieldXSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.252.066a.5.5 0 0 1 .496 0l7 4A.5.5 0 0 1 15 4.5v.72c0 4.532-3.005 8.516-7.363 9.76a.5.5 0 0 1-.274 0A10.15 10.15 0 0 1 0 5.22V4.5a.5.5 0 0 1 .252-.434zm2.895 10.788L7.5 8.207l-2.646 2.647-.708-.707L6.793 7.5 4.146 4.854l.708-.708L7.5 6.793l2.646-2.647.708.708L8.207 7.5l2.647 2.646z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgShieldXSolid;
