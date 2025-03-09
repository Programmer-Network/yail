import type { SVGProps } from "react";

const SvgBookmarkOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m12.5 14.5-.312.39A.5.5 0 0 0 13 14.5zm0-14h.5V0h-.5zm-10 0V0H2v.5zm0 14H2a.5.5 0 0 0 .812.39zm5-4 .312-.39a.5.5 0 0 0-.624 0zm5.5 4V.5h-1v14zM2 .5v14h1V.5zm.812 14.39 5-4-.624-.78-5 4zm4.376-4 5 4 .624-.78-5-4zM12.5 0h-10v1h10z'
    />
  </svg>
);
export default SvgBookmarkOutline;
