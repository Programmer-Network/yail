import type { SVGProps } from "react";

const SvgIconHighlight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 24 24'
    {...props}
  >
    <path d='m20.707 5.826-3.535-3.533a1 1 0 0 0-1.408-.006L7.096 10.82a1 1 0 0 0-.273.488l-1.024 4.437L4 18h2.828l1.142-1.129 3.588-.828c.18-.042.345-.133.477-.262l8.667-8.535a1 1 0 0 0 .005-1.42m-9.369 7.833-2.121-2.12 7.243-7.131 2.12 2.12zM4 20h16v2H4z' />
  </svg>
);
export default SvgIconHighlight;
