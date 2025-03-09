import type { SVGProps } from "react";

const SvgSlackSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M10.385 6.923H8.077v-5.77a1.154 1.154 0 0 1 2.308 0zM12.692 6.923H11.54V5.77a1.154 1.154 0 1 1 1.153 1.154M13.846 8.077h-5.77v2.308h5.77a1.154 1.154 0 0 0 0-2.308M8.077 12.692V11.54H9.23a1.154 1.154 0 1 1-1.154 1.153M1.154 4.615h5.77v2.308h-5.77a1.154 1.154 0 0 1 0-2.308M6.923 2.308v1.154H5.77a1.154 1.154 0 1 1 1.154-1.154M1.154 9.23c0-.636.516-1.153 1.154-1.153h1.154V9.23a1.154 1.154 0 0 1-2.308 0M4.615 13.846v-5.77h2.308v5.77a1.154 1.154 0 0 1-2.308 0'
    />
  </svg>
);
export default SvgSlackSolid;
