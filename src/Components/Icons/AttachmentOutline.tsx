import type { SVGProps } from "react";

const SvgAttachmentOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M.5 0v4.5a2 2 0 1 0 4 0v-3a1 1 0 0 0-2 0V5M6 .5h6.5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1V8M11 4.5H7m4 3H7m4 3H4'
    />
  </svg>
);
export default SvgAttachmentOutline;
