import type { SVGProps } from "react";

const SvgDiamondOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m7.5 14.5-.395.307a.5.5 0 0 0 .79 0zm-7-9-.429-.257a.5.5 0 0 0 .034.564zm3-5V0h-.283L3.07.243zm8 0 .429-.257L11.783 0H11.5zm3 5 .395.307a.5.5 0 0 0 .034-.564zm-6.605 8.693-7-9-.79.614 7 9zM.929 5.757l3-5L3.07.243l-3 5zM3.5 1h8V0h-8zm7.571-.243 3 5 .858-.514-3-5zm3.034 4.436-7 9 .79.614 7-9z'
    />
  </svg>
);
export default SvgDiamondOutline;
