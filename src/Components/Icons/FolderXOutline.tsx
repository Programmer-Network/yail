import type { SVGProps } from "react";

const SvgFolderXOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m5.5 6.5 4 4m-4 0 4-4m-9-4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-6l-2-2h-4a1 1 0 0 0-1 1Z'
    />
  </svg>
);
export default SvgFolderXOutline;
