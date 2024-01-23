import type { SVGProps } from "react";
const SvgIconFunny = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
    <g fill='none'>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth={1.5}
        d='M8.913 15.934c1.258.315 2.685.315 4.122-.07s2.673-1.099 3.605-2.001'
      />
      <ellipse
        cx={14.509}
        cy={9.774}
        fill='currentColor'
        rx={1}
        ry={1.5}
        transform='rotate(-15 14.51 9.774)'
      />
      <ellipse
        cx={8.714}
        cy={11.328}
        fill='currentColor'
        rx={1}
        ry={1.5}
        transform='rotate(-15 8.714 11.328)'
      />
      <path
        stroke='currentColor'
        strokeWidth={1.5}
        d='m13 16 .478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth={1.5}
        d='M4.928 4.927A9.95 9.95 0 0 1 9.412 2.34C14.746.91 20.23 4.077 21.659 9.411c1.43 5.335-1.736 10.818-7.07 12.248S3.77 19.922 2.341 14.588a9.95 9.95 0 0 1-.002-5.176'
      />
    </g>
  </svg>
);
export default SvgIconFunny;
