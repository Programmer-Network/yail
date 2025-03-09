import type { SVGProps } from "react";

const SvgMoneyStackSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M6 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1.5 0A1.5 1.5 0 0 0 0 1.5v8A1.5 1.5 0 0 0 1.5 11h12A1.5 1.5 0 0 0 15 9.5v-8A1.5 1.5 0 0 0 13.5 0zM4 2H2v2h1V3h1zm3.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M12 3h-1V2h2v2h-1zM3 7H2v2h2V8H3zm8 2V8h1V7h1v2z'
      clipRule='evenodd'
    />
    <path fill='currentColor' d='M0 12v1h15v-1zM0 14v1h15v-1z' />
  </svg>
);
export default SvgMoneyStackSolid;
