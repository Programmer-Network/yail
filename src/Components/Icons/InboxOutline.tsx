import type { SVGProps } from "react";

const SvgInboxOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m7.713 11.493-.035-.5zM1.5 1h12V0h-12zm12.5.5v12h1v-12zM13.5 14h-12v1h12zM1 13.5v-12H0v12zm.5.5a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 15zm12.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zM13.5 1a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 13.5 0zm-12-1A1.5 1.5 0 0 0 0 1.5h1a.5.5 0 0 1 .5-.5zm6 12q.125 0 .248-.009l-.07-.997A3 3 0 0 1 7.5 11zm-.823-.098Q7.074 12 7.5 12v-1q-.305 0-.589-.07zm.234-.972c-.969-.233-1.9-.895-2.97-1.586C2.924 8.687 1.771 8 .5 8v1c.938 0 1.858.512 2.899 1.184.987.638 2.099 1.434 3.278 1.719zm.837 1.061c1.386-.097 2.7-.927 3.865-1.632C12.843 9.616 13.922 9 15 9V8c-1.407 0-2.732.794-3.905 1.503-1.237.749-2.324 1.414-3.417 1.49z'
    />
  </svg>
);
export default SvgInboxOutline;
