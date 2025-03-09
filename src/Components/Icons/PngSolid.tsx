import type { SVGProps } from "react";

const SvgPngSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M3 8h.5a.5.5 0 0 0 0-1H3z' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM2 6h1.5a1.5 1.5 0 1 1 0 3H3v2H2zm8 0h3v1h-2v3h1V8.5h1V11h-3zM7 8.618V11H6V6h1v.382l1 2V6h1v5H8v-.382z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPngSolid;
