import type { SVGProps } from "react";

const SvgAbTestingSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M3.5 5A1.5 1.5 0 0 0 2 6.5V8h3V6.5A1.5 1.5 0 0 0 3.5 5'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 2.5A1.5 1.5 0 0 1 1.5 1h4A1.5 1.5 0 0 1 7 2.5v10A1.5 1.5 0 0 1 5.5 14h-4A1.5 1.5 0 0 1 0 12.5zM2 11V9h3v2h1V6.5a2.5 2.5 0 0 0-5 0V11z'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      d='M12 7h-2V5h2a1 1 0 1 1 0 2M12 10h-2V8h2a1 1 0 1 1 0 2'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8 2.5A1.5 1.5 0 0 1 9.5 1h4A1.5 1.5 0 0 1 15 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8 12.5zM12 4H9v7h3a2 2 0 0 0 1.323-3.5A2 2 0 0 0 12 4'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAbTestingSolid;
