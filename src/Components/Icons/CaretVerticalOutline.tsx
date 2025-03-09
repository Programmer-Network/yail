import type { SVGProps } from "react";

const SvgCaretVerticalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m7.5 13-.332.374.332.295.332-.295zm0-11 .34-.367-.333-.308-.34.301zm.332 11.374 4.5-4-.664-.748-4.5 4zm0-.748-4.5-4-.664.748 4.5 4zm-.664-11-4.5 4 .664.748 4.5-4zm-.008.74 4.313 4 .68-.733-4.313-4z'
    />
  </svg>
);
export default SvgCaretVerticalOutline;
