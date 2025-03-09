import type { SVGProps } from "react";

const SvgCSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5.421 14 4.213v6.574L7.5 14.58 1 10.787V4.213zM7.5 4a3.5 3.5 0 1 0 0 7h.182c.976 0 1.913-.388 2.604-1.078l.068-.068-.708-.708-.068.068A2.68 2.68 0 0 1 7.682 10H7.5a2.5 2.5 0 0 1 0-5h.182c.711 0 1.393.283 1.896.786l.068.068.708-.708-.068-.068A3.68 3.68 0 0 0 7.682 4z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCSolid;
