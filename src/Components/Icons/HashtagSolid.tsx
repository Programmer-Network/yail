import type { SVGProps } from "react";

const SvgHashtagSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='m5.41 5 .597-3.582.986.164L6.423 5H9.41l.597-3.582.986.164L10.423 5H13v1h-2.743l-.5 3H13v1H9.59l-.597 3.582-.986-.164.57-3.418H5.59l-.597 3.582-.986-.164.57-3.418H2V9h2.743l.5-3H2V5zm.847 1-.5 3h2.986l.5-3z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgHashtagSolid;
