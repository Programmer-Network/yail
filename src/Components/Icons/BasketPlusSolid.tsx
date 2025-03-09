import type { SVGProps } from "react";

const SvgBasketPlusSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M4.383 5 6.93.757 6.07.243 3.217 5H.703A.703.703 0 0 0 0 5.703v.439c0 2.944.685 5.847 2.002 8.48a.69.69 0 0 0 .612.378h9.772c.26 0 .496-.146.612-.379A18.96 18.96 0 0 0 15 6.141v-.438A.703.703 0 0 0 14.297 5h-2.514L8.93.243 8.07.757 10.617 5zM7 12v-2H5V9h2V7h1v2h2v1H8v2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBasketPlusSolid;
