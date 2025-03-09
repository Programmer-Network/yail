import type { SVGProps } from "react";

const SvgGitCommitOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M7.5 10.5a3 3 0 0 1 0-6m0 6a3 3 0 0 0 0-6m0 6V15m0-10.5V0'
    />
  </svg>
);
export default SvgGitCommitOutline;
