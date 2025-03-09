import type { SVGProps } from "react";

const SvgXlsSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zm2 5.793V6H2v1.707l.793.793L2 9.293V11h1V9.707l.5-.5.5.5V11h1V9.293L4.207 8.5 5 7.707V6H4v1.293l-.5.5zM6 6h1v4h2v1H6zm7 0h-3v3h2v1h-2v1h3V8h-2V7h2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgXlsSolid;
