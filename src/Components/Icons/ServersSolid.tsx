import type { SVGProps } from "react";

const SvgServersSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 2.5A1.5 1.5 0 0 1 1.5 1h12A1.5 1.5 0 0 1 15 2.5v2c0 .384-.144.735-.382 1 .238.265.382.616.382 1v2c0 .384-.144.735-.382 1 .238.265.382.616.382 1v2a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5v-2c0-.384.144-.735.382-1A1.5 1.5 0 0 1 0 8.5v-2c0-.384.144-.735.382-1A1.5 1.5 0 0 1 0 4.5zM2 4h3V3H2zm3 4H2V7h3zm-3 4h3v-1H2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgServersSolid;
