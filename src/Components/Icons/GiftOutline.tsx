import type { SVGProps } from "react";

const SvgGiftOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M13.5 7.5h-12m12 0a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1m12 0v5a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-5m6-3v-1m0 1H4.214A1.714 1.714 0 0 1 2.5 2.786V2.5a2 2 0 0 1 2-2 3 3 0 0 1 3 3m0 1h3.286c.947 0 1.714-.768 1.714-1.714V2.5a2 2 0 0 0-2-2 3 3 0 0 0-3 3m0 1v10'
    />
  </svg>
);
export default SvgGiftOutline;
