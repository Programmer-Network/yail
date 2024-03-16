import type { SVGProps } from "react";

const SvgIconSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    data-testid='icon-spinner'
    viewBox='0 0 24 24'
    {...props}
  >
    <style>
      {
        "@keyframes spinner-animation{93.75%,to{opacity:.2}}.icon-spinner_svg__spinner-circle{animation:spinner-animation .8s linear infinite}"
      }
    </style>
    <circle cx={4} cy={12} r={3} className='icon-spinner_svg__spinner-circle' />
    <circle
      cx={12}
      cy={12}
      r={3}
      className='icon-spinner_svg__spinner-circle'
      style={{
        animationDelay: "-.65s"
      }}
    />
    <circle
      cx={20}
      cy={12}
      r={3}
      className='icon-spinner_svg__spinner-circle'
      style={{
        animationDelay: "-.5s"
      }}
    />
  </svg>
);
export default SvgIconSpinner;
