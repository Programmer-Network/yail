import type { SVGProps } from "react";

const SvgShopOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.5 2.5V2a.5.5 0 0 0-.49.402zm12 0 .49-.098A.5.5 0 0 0 13.5 2zm1 5V8a.5.5 0 0 0 .49-.598zm-14 0-.49-.098A.5.5 0 0 0 .5 8zm3 3H3v.5h.5zm8 0v.5h.5v-.5zM0 15h15v-1H0zm1-7.5v7h1v-7zm12 0v7h1v-7zM1.5 3h12V2h-12zm11.51-.402 1 5 .98-.196-1-5zM14.5 7H.5v1h14zM.99 7.598l1-5-.98-.196-1 5zM1 1h13V0H1zm2 6.5v3h1v-3zm.5 3.5h8v-1h-8zm8.5-.5v-3h-1v3z'
    />
  </svg>
);
export default SvgShopOutline;
