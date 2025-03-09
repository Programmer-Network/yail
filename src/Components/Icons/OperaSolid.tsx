import type { SVGProps } from "react";

const SvgOperaSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M0 7.5a7.5 7.5 0 0 1 13.147-4.936A17.5 17.5 0 0 0 8.74 2H7.5A3.5 3.5 0 0 0 4 5.5v4A3.5 3.5 0 0 0 7.5 13h1.241c1.488 0 2.969-.19 4.406-.563A7.5 7.5 0 0 1 0 7.5'
    />
    <path
      fill='currentColor'
      d='M14.073 11.115A7.47 7.47 0 0 0 15 7.5c0-1.31-.336-2.543-.927-3.615l-.114-.038a16.5 16.5 0 0 0-3.962-.8A3.5 3.5 0 0 1 11 5.5v4c0 .955-.383 1.82-1.003 2.452a16.5 16.5 0 0 0 3.962-.799z'
    />
  </svg>
);
export default SvgOperaSolid;
