import type { SVGProps } from "react";

const SvgQrCodeSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 1.5A1.5 1.5 0 0 1 1.5 0h4A1.5 1.5 0 0 1 7 1.5v4A1.5 1.5 0 0 1 5.5 7h-4A1.5 1.5 0 0 1 0 5.5zM1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 9.5 0h4A1.5 1.5 0 0 1 15 1.5v4A1.5 1.5 0 0 1 13.5 7h-4A1.5 1.5 0 0 1 8 5.5zM9.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zM4 4H3V3h1zm8 0h-1V3h1zM0 9.5A1.5 1.5 0 0 1 1.5 8h4A1.5 1.5 0 0 1 7 9.5v4A1.5 1.5 0 0 1 5.5 15h-4A1.5 1.5 0 0 1 0 13.5zM1.5 9a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zM8 8h4v1H9v3H8zm7 1h-1V8h1zM4 12H3v-1h1zm10 0h-3v-1h4v4h-1zm-6 2h4v1H8z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgQrCodeSolid;
