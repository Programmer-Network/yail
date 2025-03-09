import type { SVGProps } from "react";

const SvgGitlabOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='m.5 8.5 7 6 7-6-2-8-2 6h-6l-2-6z'
    />
  </svg>
);
export default SvgGitlabOutline;
