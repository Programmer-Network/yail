import type { SVGProps } from "react";

const SvgHistoryOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m2.5 12.399.37-.336-.006-.007-.007-.007zm1 1.101v.5H4v-.5zm3.5.982.018-.5-.053 1zM7.5 7.5H7a.5.5 0 0 0 .146.354zm6.5 0A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM2.857 12.049A6.48 6.48 0 0 1 1 7.5H0c0 2.043.818 3.897 2.143 5.249zm-.727.686 1 1.101.74-.672-1-1.101zM7.5 14a7 7 0 0 1-.465-.016l-.07.997q.265.02.535.019zm.018 0-.5-.017-.036 1 .5.017zM7 3v4.5h1V3zm.146 4.854 3 3 .708-.708-3-3zM0 14h3.5v-1H0zm4-.5V10H3v3.5z'
    />
  </svg>
);
export default SvgHistoryOutline;
