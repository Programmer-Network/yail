import type { SVGProps } from "react";

const SvgLayersOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m7.5 1.5.197-.46a.5.5 0 0 0-.394 0zm-7 3-.197-.46a.5.5 0 0 0 0 .92zm7 3-.197.46a.5.5 0 0 0 .394 0zm7-3 .197.46a.5.5 0 0 0 0-.92zm-7 6-.197.46.197.084.197-.084zm0 3-.197.46.197.084.197-.084zM7.303 1.04l-7 3 .394.92 7-3zm-7 3.92 7 3 .394-.92-7-3zm7.394 3 7-3-.394-.92-7 3zm7-3.92-7-3-.394.92 7 3zM.303 7.96l7 3 .394-.92-7-3zm7.394 3 7-3-.394-.92-7 3zm-7.394 0 7 3 .394-.92-7-3zm7.394 3 7-3-.394-.92-7 3z'
    />
  </svg>
);
export default SvgLayersOutline;
