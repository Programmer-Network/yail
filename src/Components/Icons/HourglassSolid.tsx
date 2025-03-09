import type { SVGProps } from "react";

const SvgHourglassSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M12 1h2V0H1v1h2v3.672a2.5 2.5 0 0 0 .732 1.767l.707.707a.5.5 0 0 1 0 .708l-1 1A1.5 1.5 0 0 0 3 9.914V14H1v1h13v-1h-2V9.914a1.5 1.5 0 0 0-.44-1.06l-1-1a.5.5 0 0 1 0-.708l1-1a1.5 1.5 0 0 0 .44-1.06zM4.25 5.5h6.543l.06-.06A.5.5 0 0 0 11 5.085V1H4v3.672c0 .296.088.584.25.828'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgHourglassSolid;
