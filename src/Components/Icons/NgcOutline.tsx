import type { SVGProps } from "react";

const SvgNgcOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M3 3.5a11.08 11.08 0 0 1 9 0M.5 6.5v5.764a1.236 1.236 0 0 0 2.342.553L3.5 11.5m11-5v5.764a1.236 1.236 0 0 1-2.342.553L11.5 11.5M6 7.5h3m-5.7 3.499L1.148 8.31A2.96 2.96 0 0 1 .5 6.461v-.396a2.565 2.565 0 0 1 5.032-.705l1.117 3.91a1.922 1.922 0 0 1-3.35 1.729Zm8.4 0 2.151-2.688c.42-.525.649-1.177.649-1.85v-.396a2.565 2.565 0 0 0-5.032-.705L8.351 9.27a1.922 1.922 0 0 0 3.35 1.729Z'
    />
  </svg>
);
export default SvgNgcOutline;
