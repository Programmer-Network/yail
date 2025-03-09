import type { SVGProps } from "react";

const SvgLegoOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M3.5 3h8V2h-8zM13 4.5v8h1v-8zM11.5 14h-8v1h8zM2 12.5v-8H1v8zM3.5 14A1.5 1.5 0 0 1 2 12.5H1A2.5 2.5 0 0 0 3.5 15zm9.5-1.5a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5zM11.5 3A1.5 1.5 0 0 1 13 4.5h1A2.5 2.5 0 0 0 11.5 2zm-8-1A2.5 2.5 0 0 0 1 4.5h1A1.5 1.5 0 0 1 3.5 3zM5 8h1V7H5zm4 0h1V7H9zm1.1 1.7a3.25 3.25 0 0 1-5.2 0l-.8.6c1.7 2.267 5.1 2.267 6.8 0zM5 2.5v-1H4v1zM5.5 1h4V0h-4zm4.5.5v1h1v-1zM9.5 1a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 9.5 0zM5 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 4 1.5z'
    />
  </svg>
);
export default SvgLegoOutline;
