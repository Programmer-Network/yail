import type { SVGProps } from "react";

const SvgRubySolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M4.293 4 8.058.236 9.73 4zM14.293 0l-3.632 3.632L9.047 0zM.236 8.058 4 9.73V4.293zM3.632 10.661 0 9.047v5.246zM5 9.293 9.293 5H5zM15 13.731l-3.907-9.117L15 .707zM14.048 14.048l-3.717-8.672-4.955 4.955zM4.614 11.093 13.731 15H.707z'
    />
  </svg>
);
export default SvgRubySolid;
