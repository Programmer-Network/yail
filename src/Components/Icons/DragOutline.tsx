import type { SVGProps } from "react";

const SvgDragOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m7.5 7.5.137-.48a.5.5 0 0 0-.618.617zm2 7-.48.137a.5.5 0 0 0 .94.06zm5-5 .197.46a.5.5 0 0 0-.06-.94zM11 11l-.197-.46a.5.5 0 0 0-.263.263zM3.5 3.5V3H3v.5zm10 0h.5V3h-.5zm-10 10H3v.5h.5zM0 1h1V0H0zm4 0h1V0H4zm4 0h1V0H8zM0 5h1V4H0zm0 4h1V8H0zm7.02-1.363 2 7 .96-.274-2-7zm7.617 1.382-7-2-.274.962 7 2zM9.96 14.697l1.5-3.5-.92-.394-1.5 3.5zm1.237-3.237 3.5-1.5-.394-.92-3.5 1.5zM3.5 4h10V3h-10zm9.5-.5V7h1V3.5zm-10 0v10h1v-10zM3.5 14H7v-1H3.5z'
    />
  </svg>
);
export default SvgDragOutline;
