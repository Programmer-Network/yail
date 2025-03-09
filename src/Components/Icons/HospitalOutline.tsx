import type { SVGProps } from "react";

const SvgHospitalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m7.5.5.224-.447a.5.5 0 0 0-.448 0zm-6 3-.224-.447A.5.5 0 0 0 1 3.5zm12 0h.5a.5.5 0 0 0-.276-.447zm-8 7V10H5v.5zm4 0h.5V10h-.5zM0 15h15v-1H0zM7.276.053l-6 3 .448.894 6-3zm6.448 3-6-3-.448.894 6 3zM7 3v2.5h1V3zm0 2.5V8h1V5.5zM5 6h2.5V5H5zm2.5 0H10V5H7.5zM1 3.5v11h1v-11zm12 0v11h1v-11zm-7 11v-4H5v4zM5.5 11h4v-1h-4zm3.5-.5v4h1v-4z'
    />
  </svg>
);
export default SvgHospitalOutline;
