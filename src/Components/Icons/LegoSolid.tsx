import type { SVGProps } from "react";

const SvgLegoSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M4 1.5A1.5 1.5 0 0 1 5.5 0h4A1.5 1.5 0 0 1 11 1.5V2h.5A2.5 2.5 0 0 1 14 4.5v8a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 1 12.5v-8A2.5 2.5 0 0 1 3.5 2H4zM5 7v1h1V7zm4 0v1h1V7zM4.9 9.7a3.25 3.25 0 0 0 5.2 0l.8.6c-1.7 2.267-5.1 2.267-6.8 0z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgLegoSolid;
