import type { SVGProps } from "react";

const SvgGitSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M6.44.854a1.5 1.5 0 0 1 2.12 0l5.586 5.585a1.5 1.5 0 0 1 0 2.122l-5.585 5.585a1.5 1.5 0 0 1-2.122 0L.854 8.561a1.5 1.5 0 0 1 0-2.122L4.793 2.5l1.353 1.353A1.5 1.5 0 0 0 7 5.914v3.171a1.5 1.5 0 1 0 1 0v-3.17q.076-.027.147-.061l1 1a1.5 1.5 0 1 0 .707-.707l-1-1a1.5 1.5 0 0 0-2-2L5.5 1.792z'
    />
  </svg>
);
export default SvgGitSolid;
