import type { SVGProps } from "react";

const SvgSafariOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m3.5 11.5-.429-.257a.5.5 0 0 0 .686.686zm3-5-.257-.429-.107.065-.065.107zm5-3 .429.257a.5.5 0 0 0-.686-.686zm-3 5 .257.429.107-.065.065-.107zm5.5-1A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM1 7.5A6.5 6.5 0 0 1 7.5 1V0A7.5 7.5 0 0 0 0 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zM3.929 11.757l3-5-.858-.514-3 5zM6.757 6.93l5-3-.514-.858-5 3zm4.314-3.686-3 5 .858.514 3-5zM8.243 8.07l-5 3 .514.858 5-3z'
    />
  </svg>
);
export default SvgSafariOutline;
