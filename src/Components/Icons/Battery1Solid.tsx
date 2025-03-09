import type { SVGProps } from "react";

const SvgBattery1Solid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 11.5A1.5 1.5 0 0 0 1.5 13h10a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 11.5 2h-10A1.5 1.5 0 0 0 0 3.5zm3-.5V4H2v7z'
      clipRule='evenodd'
    />
    <path fill='currentColor' d='M15 5v5h-1V5z' />
  </svg>
);
export default SvgBattery1Solid;
