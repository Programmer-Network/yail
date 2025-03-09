import type { SVGProps } from "react";

const SvgSpotifySolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m7.726-2.203c-1.621-.132-3.272.066-4.625.544l-.333-.943c1.5-.53 3.293-.74 5.04-.597 1.743.142 3.478.641 4.843 1.568l-.562.827c-1.185-.804-2.74-1.266-4.363-1.399m-4.4 2.695c3.446-.61 5.848-.297 7.839 1.132l.583-.813C9.45 6.661 6.732 6.374 3.152 7.008zm.336 2.124c.986-.24 2.2-.345 3.392-.228 1.196.117 2.334.454 3.202 1.065l.575-.819c-1.053-.74-2.375-1.113-3.68-1.241a11.5 11.5 0 0 0-3.726.252z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSpotifySolid;
