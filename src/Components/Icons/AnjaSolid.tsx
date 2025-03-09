import type { SVGProps } from "react";

const SvgAnjaSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M8 13a2 2 0 0 0 2-2H9a1 1 0 0 1-1 1H6.5v1z' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5 15q-.274 0-.543-.029L7 15H1V6h.019A6.5 6.5 0 0 1 14 6.5V15zM8.974 4.9l1.3.086A6 6 0 0 1 11.503 7H4.207a5.62 5.62 0 0 1 4.767-2.1M9.085 8h2.71l.04.196q.075.397.07.804H10.5a1.5 1.5 0 0 1-1.415-1m1.415 2h1.286a8 8 0 0 1-.524 1.556 4.116 4.116 0 0 1-7.524 0A6.2 6.2 0 0 1 3.254 10H4.5a2.5 2.5 0 0 0 2.45-2h1.1a2.5 2.5 0 0 0 2.45 2m-6-1H3.235q.046-.345.18-.669.072-.169.153-.331h2.347A1.5 1.5 0 0 1 4.5 9'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAnjaSolid;
