import type { SVGProps } from "react";

const SvgSimohamedSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M6 9H5V8h1zM10 9H9V8h1z' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M2 5.5a5.5 5.5 0 1 1 11 0v.56a2.063 2.063 0 0 1 1.5 2.502l-.151.604a2.42 2.42 0 0 1-1.825 1.777A6.5 6.5 0 0 1 11.7 12.4l-.6.8a4.5 4.5 0 0 1-7.2 0l-.6-.8a6.5 6.5 0 0 1-.823-1.457A2.42 2.42 0 0 1 .65 9.166l-.15-.604A2.063 2.063 0 0 1 2 6.06zM3 7h3V6H3v-.293l.975-.975A2.5 2.5 0 0 1 5.743 4h3.514a2.5 2.5 0 0 1 1.768.732l.975.975V6H9v1h3v1.5a5.5 5.5 0 0 1-.455 2.19l-.64.384q-.526.316-1.098.526l-1.1-1.1H6.293l-1.1 1.1a6.5 6.5 0 0 1-1.098-.526l-.64-.384A5.5 5.5 0 0 1 3 8.5zm-1 .124c-.411.22-.653.702-.53 1.195l.151.605c.078.309.253.573.488.762A6.5 6.5 0 0 1 2 8.5zm4.307 4.777Q6.865 12 7.439 12h.122q.573 0 1.133-.1l-.401-.4H6.707zm6.584-2.215c.235-.19.41-.453.488-.762l.15-.605A1.06 1.06 0 0 0 13 7.124V8.5q0 .601-.11 1.186'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSimohamedSolid;
