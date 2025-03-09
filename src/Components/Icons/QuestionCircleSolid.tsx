import type { SVGProps } from "react";

const SvgQuestionCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0M5.5 6a2 2 0 0 1 2-2h.6c1.05 0 1.9.85 1.9 1.9V6a2 2 0 0 1-2 2v1H7V7h1a1 1 0 0 0 1-1v-.1a.9.9 0 0 0-.9-.9h-.6a1 1 0 0 0-1 1zM7 11v-1h1v1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgQuestionCircleSolid;
