import type { SVGProps } from "react";

const SvgBasketSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M6.929.757 4.383 5h6.234L8.07.757 8.93.243 11.783 5h2.514c.388 0 .703.315.703.703v.439a18.96 18.96 0 0 1-2.002 8.48.68.68 0 0 1-.612.378H2.614a.69.69 0 0 1-.612-.379A18.96 18.96 0 0 1 0 6.141v-.438C0 5.315.315 5 .703 5h2.514L6.07.243z'
    />
  </svg>
);
export default SvgBasketSolid;
