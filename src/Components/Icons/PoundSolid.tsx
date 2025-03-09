import type { SVGProps } from "react";

const SvgPoundSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M3 4.442A4.44 4.44 0 0 1 7.442 0h.865a4.48 4.48 0 0 1 4.157 2.814l-.928.372A3.48 3.48 0 0 0 8.307 1h-.865C5.54 1 4 2.54 4 4.442V7h5v1H4v3.5c0 .346-.054.683-.156 1h.24a6.5 6.5 0 0 1 2.906.686l.05.025-.223.447.223-.447a5.5 5.5 0 0 0 4.92 0l1.316-.658.448.894-1.317.659a6.5 6.5 0 0 1-5.814 0l-.05-.025.224-.448-.224.448a5.5 5.5 0 0 0-2.46-.581h-.765a3.27 3.27 0 0 1-1.557 1.107l-1.103.367-.316-.948 1.103-.368A2.275 2.275 0 0 0 3 11.5V8H1V7h2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPoundSolid;
