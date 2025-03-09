import type { SVGProps } from "react";

const SvgSendOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m14.5.5.46.197a.5.5 0 0 0-.657-.657zm-14 6-.197-.46a.5.5 0 0 0-.06.889zm8 8-.429.257a.5.5 0 0 0 .889-.06zM14.303.04l-14 6 .394.92 14-6zM.243 6.93l5 3 .514-.858-5-3zM5.07 9.757l3 5 .858-.514-3-5zm3.889 4.94 6-14-.92-.394-6 14zM14.146.147l-9 9 .708.707 9-9z'
    />
  </svg>
);
export default SvgSendOutline;
