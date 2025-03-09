import type { SVGProps } from "react";

const SvgBatteryChargeSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 11.5A1.5 1.5 0 0 0 1.5 13h10a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 11.5 2h-10A1.5 1.5 0 0 0 0 3.5zm6.724-6.447A.5.5 0 0 0 6 5.5v3.191L2.724 7.053l-.448.894 4 2A.5.5 0 0 0 7 9.5V6.309l3.276 1.638.448-.894z'
      clipRule='evenodd'
    />
    <path fill='currentColor' d='M15 5v5h-1V5z' />
  </svg>
);
export default SvgBatteryChargeSolid;
