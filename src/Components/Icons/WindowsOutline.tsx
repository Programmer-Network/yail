import type { SVGProps } from "react";

const SvgWindowsOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m.5 3.5-.105-.489A.5.5 0 0 0 0 3.5zm14-3h.5a.5.5 0 0 0-.605-.489zm0 14-.07.495A.5.5 0 0 0 15 14.5zm-14-2H0a.5.5 0 0 0 .43.495zm.105-8.511 14-3-.21-.978-14 3zM14 .5v14h1V.5zm.57 13.505-14-2-.14.99 14 2zM1 12.5v-9H0v9zM.5 8h14V7H.5zM6 2v11h1V2z'
    />
  </svg>
);
export default SvgWindowsOutline;
