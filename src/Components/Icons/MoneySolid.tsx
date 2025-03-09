import type { SVGProps } from "react";

const SvgMoneySolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M6 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5zM4 4H2v2h1V5h1zm8 1h-1V4h2v2h-1zM7.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m3.5 5v1h2V9h-1v1zM2 9h1v1h1v1H2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMoneySolid;
