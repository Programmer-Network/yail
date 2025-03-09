import type { SVGProps } from "react";

const SvgArchiveOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M5 8.5h5M.5.5h14v4H.5zm1 4v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9z'
    />
  </svg>
);
export default SvgArchiveOutline;
