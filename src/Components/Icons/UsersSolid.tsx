import type { SVGProps } from "react";

const SvgUsersSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M5.5 0a3.499 3.499 0 1 0 0 6.996A3.499 3.499 0 1 0 5.5 0M3.5 8.994a3.5 3.5 0 0 0-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 0 0-3.5-3.5zM12.5 10H12v5h3v-2.5a2.5 2.5 0 0 0-2.5-2.5'
    />
    <path fill='currentColor' d='M11.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5' />
  </svg>
);
export default SvgUsersSolid;
