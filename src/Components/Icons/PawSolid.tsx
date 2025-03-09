import type { SVGProps } from "react";

const SvgPawSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M5 0a2 2 0 0 0-2 2v1a2 2 0 1 0 4 0V2a2 2 0 0 0-2-2M10 0a2 2 0 0 0-2 2v1a2 2 0 1 0 4 0V2a2 2 0 0 0-2-2M2 5a2 2 0 0 0-2 2v.5a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2M13 5a2 2 0 0 0-2 2v.5a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2M9.613 7.779a2.737 2.737 0 0 0-4.226 0L2.47 11.322C1.261 12.789 2.305 15 4.205 15c.272 0 .54-.063.782-.185l.36-.18a4.81 4.81 0 0 1 4.306 0l.36.18c.242.122.51.185.782.185 1.9 0 2.944-2.211 1.736-3.678z'
    />
  </svg>
);
export default SvgPawSolid;
