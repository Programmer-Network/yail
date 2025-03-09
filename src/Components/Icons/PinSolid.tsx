import type { SVGProps } from "react";

const SvgPinSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M6 6.496a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 6.496A6.5 6.5 0 0 1 7.5 0C11.089 0 14 2.909 14 6.496c0 2.674-1.338 4.793-2.772 6.225a10.9 10.9 0 0 1-2.115 1.654c-.322.19-.623.34-.885.442-.247.098-.506.174-.728.174s-.481-.076-.728-.174a6.5 6.5 0 0 1-.885-.442 10.9 10.9 0 0 1-2.115-1.654C2.338 11.289 1 9.17 1 6.496m6.5-2.499a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-2.5-2.5'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPinSolid;
