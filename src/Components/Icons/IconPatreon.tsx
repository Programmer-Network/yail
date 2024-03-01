import type { SVGProps } from "react";

const SvgIconPatreon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 1024 1024'
    {...props}
  >
    <circle cx={512} cy={512} r={512} />
    <path
      d='M598.57 285.68c-93.7 0-169.94 76.24-169.94 169.94C428.63 549 504.87 625 598.57 625 692 625 768 549 768 455.62c0-93.7-76-169.94-169.43-169.94M296 738.32h83V285.68h-83'
      style={{
        fill: "#fff"
      }}
    />
  </svg>
);
export default SvgIconPatreon;