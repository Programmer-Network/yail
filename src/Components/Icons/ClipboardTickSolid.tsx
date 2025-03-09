import type { SVGProps } from "react";

const SvgClipboardTickSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M4 0h7v1h3v12.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5V1h3zm1 1h5v1.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm2.024 10.232 3.852-4.403-.752-.658-3.148 3.598-1.622-1.623-.708.708z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgClipboardTickSolid;
