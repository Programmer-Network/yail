import type { SVGProps } from "react";

const SvgMicrophoneOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M2.5 4v2.5a5 5 0 0 0 5 5m5-7.5v2.5a5 5 0 0 1-5 5m0 0V15M5 14.5h5m-.5-12v4a2 2 0 1 1-4 0v-4a2 2 0 1 1 4 0Z'
    />
  </svg>
);
export default SvgMicrophoneOutline;
