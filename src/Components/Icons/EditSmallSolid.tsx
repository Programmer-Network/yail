import type { SVGProps } from "react";

const SvgEditSmallSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M8.854 4.146a.5.5 0 0 0-.708 0L4 8.293V10.5a.5.5 0 0 0 .5.5h2.207l4.147-4.146a.5.5 0 0 0 0-.708z'
    />
  </svg>
);
export default SvgEditSmallSolid;
