import type { SVGProps } from "react";

const SvgCarOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M14.5 6.497h.5v-.139l-.071-.119zm-14 0-.429-.258L0 6.36v.138zm2.126-3.541-.429-.258zm9.748 0 .429-.258zM3.5 11.5V11H3v.5zm8 0h.5V11h-.5zM14 6.497V12.5h1V6.497zM.929 6.754l2.126-3.54-.858-.516L.071 6.24zM5.198 2h4.604V1H5.198zm6.747 1.213 2.126 3.541.858-.515-2.126-3.54zM2.5 13h-1v1h1zm.5-1.5v1h1v-1zM13.5 13h-1v1h1zm-1.5-.5v-1h-1v1zm-.5-1.5h-8v1h8zM1 12.5V6.497H0V12.5zm11.5.5a.5.5 0 0 1-.5-.5h-1a1.5 1.5 0 0 0 1.5 1.5zm-10 1A1.5 1.5 0 0 0 4 12.5H3a.5.5 0 0 1-.5.5zm-1-1a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 14zM9.802 2a2.5 2.5 0 0 1 2.143 1.213l.858-.515A3.5 3.5 0 0 0 9.802 1zM3.055 3.213A2.5 2.5 0 0 1 5.198 2V1a3.5 3.5 0 0 0-3 1.698zM14 12.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zM2 10h3V9H2zm11-1h-3v1h3zM3 7h9V6H3z'
    />
  </svg>
);
export default SvgCarOutline;
