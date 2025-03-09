import type { SVGProps } from "react";

const SvgDiamondSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M11.783 0H3.217L.07 5.243a.5.5 0 0 0 .034.564l7 9a.5.5 0 0 0 .79 0l7-9a.5.5 0 0 0 .034-.564z'
    />
  </svg>
);
export default SvgDiamondSolid;
