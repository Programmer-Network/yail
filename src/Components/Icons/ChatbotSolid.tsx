import type { SVGProps } from "react";

const SvgChatbotSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M7.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M9 2H8V0H7v2H6a6 6 0 0 0 0 12h3q.195 0 .389-.013l3.99.998a.5.5 0 0 0 .606-.606l-.577-2.309A6 6 0 0 0 9 2M5 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M7.5 12a4.48 4.48 0 0 1-2.813-.987l.626-.78c.599.48 1.359.767 2.187.767s1.588-.287 2.187-.767l.626.78A4.48 4.48 0 0 1 7.5 12'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgChatbotSolid;
