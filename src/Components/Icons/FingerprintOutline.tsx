import type { SVGProps } from "react";

const SvgFingerprintOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='square'
      strokeLinejoin='round'
      d='M12.587 3.513a6.03 6.03 0 0 1 .818 3.745v.75c0 .788.205 1.563.595 2.247M4.483 6.509c0-.795.313-1.557.871-2.119a2.96 2.96 0 0 1 2.103-.877c.789 0 1.545.315 2.103.877s.871 1.324.871 2.12v.748c0 1.621.522 3.198 1.487 4.495m-4.46-5.244v1.498A10.54 10.54 0 0 0 9.315 14M4.483 9.505A13.6 13.6 0 0 0 5.821 14m-3.643-1.498c-.501-1.7-.727-3.471-.669-5.244V6.51a6 6 0 0 1 .79-3.002 5.97 5.97 0 0 1 2.177-2.2 5.91 5.91 0 0 1 5.955-.004'
    />
  </svg>
);
export default SvgFingerprintOutline;
