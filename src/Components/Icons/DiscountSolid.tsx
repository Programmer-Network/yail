import type { SVGProps } from "react";

const SvgDiscountSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='m6.448.436-1.13 1.129a.5.5 0 0 1-.344.143H3.196c-.822 0-1.488.666-1.488 1.488v1.778c0 .13-.052.253-.143.345L.435 6.448a1.49 1.49 0 0 0 0 2.104l1.13 1.13a.5.5 0 0 1 .143.344v1.778c0 .822.666 1.488 1.488 1.488h1.778c.13 0 .253.052.345.143l1.129 1.13a1.49 1.49 0 0 0 2.104 0l1.13-1.13a.5.5 0 0 1 .344-.143h1.778c.822 0 1.488-.666 1.488-1.488v-1.778c0-.13.052-.253.143-.345l1.13-1.129a1.49 1.49 0 0 0 0-2.104l-1.13-1.13a.5.5 0 0 1-.143-.344V3.196c0-.822-.666-1.488-1.488-1.488h-1.778a.5.5 0 0 1-.345-.143L8.552.435a1.49 1.49 0 0 0-2.104 0m-1.802 9.21 5-5 .708.708-5 5zM5 5v1h1V5zm4 5h1V9H9z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgDiscountSolid;
