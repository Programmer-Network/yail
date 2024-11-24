import type { SVGProps } from "react";

const SvgIconBurgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill='none'
    stroke='currentColor'
    aria-hidden='true'
    viewBox='0 0 24 24'
    {...props}
  >
    <path d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
  </svg>
);
export default SvgIconBurgerMenu;
