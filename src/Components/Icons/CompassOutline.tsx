import type { SVGProps } from "react";

const SvgCompassOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m4.5 10.5-.447-.224a.5.5 0 0 0 .67.671zm2-4-.224-.447a.5.5 0 0 0-.223.223zm4-2 .447.224a.5.5 0 0 0-.67-.671zm-2 4 .224.447a.5.5 0 0 0 .223-.223zm-1 5.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM4.947 10.724l2-4-.894-.448-2 4zm1.777-3.777 4-2-.448-.894-4 2zm3.329-2.67-2 4 .894.447 2-4zM8.276 8.052l-4 2 .448.894 4-2z'
    />
  </svg>
);
export default SvgCompassOutline;
