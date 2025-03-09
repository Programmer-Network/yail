import type { SVGProps } from "react";

const SvgGitBranchOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M2.5 4.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 0v6m2 2a2 2 0 1 1-2-2m2 2a2 2 0 0 0-2-2m2 2h5a3 3 0 0 0 3-3v-2m0 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z'
    />
  </svg>
);
export default SvgGitBranchOutline;
