import type { SVGProps } from "react";

const SvgOmegaSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 6.5a6.5 6.5 0 1 1 9 6.002V14h5v1H9v-3h.026a.5.5 0 0 1 .307-.313 5.5 5.5 0 1 0-3.667 0c.152.053.261.172.308.313H6v3H0v-1h5v-1.498A6.5 6.5 0 0 1 1 6.5'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgOmegaSolid;
