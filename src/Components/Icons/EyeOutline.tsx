import type { SVGProps } from "react";

const SvgEyeOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m.5 7.5-.464-.186a.5.5 0 0 0 0 .372zm14 0 .464.186a.5.5 0 0 0 0-.372zm-7 4.5c-2.314 0-3.939-1.152-5.003-2.334a9.4 9.4 0 0 1-1.449-2.164l-.08-.18-.004-.007v-.001L.5 7.5l-.464.186v.002l.003.004.026.063.078.173a10.368 10.368 0 0 0 1.61 2.406C2.94 11.653 4.814 13 7.5 13zm-7-4.5.464.186.004-.008a3 3 0 0 1 .08-.18 9.368 9.368 0 0 1 1.449-2.164C3.56 4.152 5.186 3 7.5 3V2C4.814 2 2.939 3.348 1.753 4.666a10.4 10.4 0 0 0-1.61 2.406 6 6 0 0 0-.104.236l-.002.004v.001H.035zm7-4.5c2.314 0 3.939 1.152 5.003 2.334a9.4 9.4 0 0 1 1.449 2.164 5 5 0 0 1 .08.18l.004.007v.001L14.5 7.5l.464-.186v-.002l-.003-.004-.026-.063-.078-.173a10.365 10.365 0 0 0-1.61-2.406C12.06 3.348 10.186 2 7.5 2zm7 4.5-.464-.186-.003.008-.015.035-.066.145a9.37 9.37 0 0 1-1.449 2.164C11.44 10.848 9.814 12 7.5 12v1c2.686 0 4.561-1.348 5.747-2.665a10.4 10.4 0 0 0 1.61-2.407 6 6 0 0 0 .104-.236l.002-.004v-.001h.001zM7.5 9A1.5 1.5 0 0 1 6 7.5H5A2.5 2.5 0 0 0 7.5 10zM9 7.5A1.5 1.5 0 0 1 7.5 9v1A2.5 2.5 0 0 0 10 7.5zM7.5 6A1.5 1.5 0 0 1 9 7.5h1A2.5 2.5 0 0 0 7.5 5zm0-1A2.5 2.5 0 0 0 5 7.5h1A1.5 1.5 0 0 1 7.5 6z'
    />
  </svg>
);
export default SvgEyeOutline;
