import type { SVGProps } from "react";

const SvgRouterOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.5 9.5V9H1v.5zm12 0h.5V9h-.5zm0 5v.5h.5v-.5zm-12 0H1v.5h.5zm1.72-8.339C4.373 4.761 5.916 4 7.5 4V3c-1.917 0-3.732.924-5.052 2.525zM7.5 4c1.583 0 3.126.762 4.281 2.161l.771-.636C11.232 3.924 9.417 3 7.5 3zm-6.614.318C2.658 2.17 5.04 1 7.5 1V0C4.71 0 2.055 1.33.114 3.682zM7.5 1c2.46 0 4.842 1.17 6.614 3.318l.772-.636C12.945 1.329 10.29 0 7.5 0zM7 6v3h1V6zm-5.5 4h12V9h-12zM13 9.5v5h1v-5zm.5 4.5h-12v1h12zM2 14.5v-5H1v5z'
    />
  </svg>
);
export default SvgRouterOutline;
