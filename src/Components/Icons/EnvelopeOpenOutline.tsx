import type { SVGProps } from "react";

const SvgEnvelopeOpenOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m.5 5 7 3.5 7-3.5m0 .08v8.42a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1V5.08a1 1 0 0 1 .504-.868l6-3.428a1 1 0 0 1 .992 0l6 3.428a1 1 0 0 1 .504.868Z'
    />
  </svg>
);
export default SvgEnvelopeOpenOutline;
