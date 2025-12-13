import type { SVGProps } from "react";

const SvgVerticalLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      d='M5 19h14V5H5zM3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm12 3v10h2V7zm-4 0v10h2V7zM7 17V7h2v10z'
    />
  </svg>
);
export default SvgVerticalLayout;
