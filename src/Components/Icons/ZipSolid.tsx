import type { SVGProps } from "react";

const SvgZipSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M3.296 11.379 3.89 9h1.22l.594 2.379A.5.5 0 0 1 5.22 12H3.781a.5.5 0 0 1-.485-.621M10.5 3a.5.5 0 0 0-.5.5V4h1v-.5a.5.5 0 0 0-.5-.5'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 1.5A1.5 1.5 0 0 1 1.5 0h12A1.5 1.5 0 0 1 15 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 13.5zM3 3h3V2H3zm0 2h3V4H3zm3 2H3V6h3zm-.11 1H3.11l-.784 3.136A1.5 1.5 0 0 0 3.78 13h1.438a1.5 1.5 0 0 0 1.455-1.864zm3.374 2.06a.5.5 0 0 1 .513.024L12 11.566V10h1v2.5a.5.5 0 0 1-.777.416L10 11.434V13H9v-2.5a.5.5 0 0 1 .264-.44M9 6v3h1V8h2v1h1V6h-1v1h-2V6zm3-2v-.5a1.5 1.5 0 0 0-3 0V5h4V4z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgZipSolid;
