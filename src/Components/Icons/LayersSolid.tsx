import type { SVGProps } from "react";

const SvgLayersSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.697 1.04a.5.5 0 0 0-.394 0l-7 3a.5.5 0 0 0 0 .92l7 3a.5.5 0 0 0 .394 0l7-3a.5.5 0 0 0 0-.92z'
    />
    <path
      fill='currentColor'
      d='M7.5 9.956.697 7.04l-.394.92L7.5 11.044l7.197-3.084-.394-.92z'
    />
    <path
      fill='currentColor'
      d='m.697 10.04-.394.92L7.5 14.044l7.197-3.084-.394-.92L7.5 12.956z'
    />
  </svg>
);
export default SvgLayersSolid;
