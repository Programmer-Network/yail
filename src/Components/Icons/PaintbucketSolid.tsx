import type { SVGProps } from "react";

const SvgPaintbucketSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M4.5 0A2.5 2.5 0 0 0 2 2.5v3.793l-.44.44a2.5 2.5 0 0 0 0 3.535l3.172 3.171a2.5 2.5 0 0 0 3.536 0l4.171-4.171a2.5 2.5 0 0 0 0-3.536L9.268 2.561a2.5 2.5 0 0 0-2.342-.666A2.5 2.5 0 0 0 4.5 0M6 3.707V7h1V2.914a1.5 1.5 0 0 1 1.56.354l3.172 3.171a1.5 1.5 0 0 1 0 2.122l-.44.439H1.915a1.5 1.5 0 0 1 .354-1.56zm-.009-1.372A1.5 1.5 0 0 0 3 2.5v2.793L5.732 2.56q.123-.124.259-.226'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      d='m12.645 9.737 1.534 1.534a2.17 2.17 0 1 1-3.069 0z'
    />
  </svg>
);
export default SvgPaintbucketSolid;
