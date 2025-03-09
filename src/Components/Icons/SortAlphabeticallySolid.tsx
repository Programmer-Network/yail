import type { SVGProps } from "react";

const SvgSortAlphabeticallySolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3 13.293V0h1v13.293l2.146-2.147.708.708-3 3a.5.5 0 0 1-.708 0l-3-3 .708-.708zM11.5 1A1.5 1.5 0 0 0 10 2.5V4h3V2.5A1.5 1.5 0 0 0 11.5 1M13 5v2h1V2.5a2.5 2.5 0 0 0-5 0V7h1V5zM9 8h3a2 2 0 0 1 1.323 3.5A2 2 0 0 1 12 15H9zm3 3a1 1 0 1 0 0-2h-2v2zm-2 1h2a1 1 0 1 1 0 2h-2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSortAlphabeticallySolid;
