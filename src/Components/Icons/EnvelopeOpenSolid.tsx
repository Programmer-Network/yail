import type { SVGProps } from "react";

const SvgEnvelopeOpenSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M6.756.35a1.5 1.5 0 0 1 1.488 0l6 3.428a1.5 1.5 0 0 1 .408.341L7.5 7.933.348 4.12q.17-.204.408-.341z'
    />
    <path
      fill='currentColor'
      d='M0 5.067V13.5A1.5 1.5 0 0 0 1.5 15h12a1.5 1.5 0 0 0 1.5-1.5V5.067l-7.5 4z'
    />
  </svg>
);
export default SvgEnvelopeOpenSolid;
