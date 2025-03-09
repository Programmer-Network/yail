import type { SVGProps } from "react";

const SvgAirpodsOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M6.5 3.5a2.648 2.648 0 0 1-2.977 2.628l-.32-.04a2.67 2.67 0 0 1-1.27-.513L.5 4.5v-2l1.433-1.075a2.67 2.67 0 0 1 1.27-.513l.32-.04A2.648 2.648 0 0 1 6.5 3.5Zm0 0v11h-2V6m4-2.5a2.648 2.648 0 0 0 2.977 2.628l.32-.04c.46-.058.898-.234 1.27-.513L14.5 4.5v-2l-1.433-1.075a2.67 2.67 0 0 0-1.27-.513l-.32-.04A2.648 2.648 0 0 0 8.5 3.5Zm0 0v11h2V6M2 3.5h2m7 0h2'
    />
  </svg>
);
export default SvgAirpodsOutline;
