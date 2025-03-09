import type { SVGProps } from "react";

const SvgClipboardSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M11 0H4v1H1v12.5A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V1h-3zm-1 1H5v1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgClipboardSolid;
