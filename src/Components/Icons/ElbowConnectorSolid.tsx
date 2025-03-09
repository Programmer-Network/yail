import type { SVGProps } from "react";

const SvgElbowConnectorSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.5 0a1.5 1.5 0 1 0 1.415 2H7v12h5.085a1.5 1.5 0 1 0 0-1H8V1H2.915A1.5 1.5 0 0 0 1.5 0'
    />
  </svg>
);
export default SvgElbowConnectorSolid;
