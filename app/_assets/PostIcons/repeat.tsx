import * as React from "react";
import { SVGProps } from "react";
const repeat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      className="dark:stroke-white"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M3.58 5.16h13.84c1.66 0 3 1.34 3 3v3.32"
    />
    <path
      stroke="#000"
      className="dark:stroke-white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.74 2 3.58 5.16l3.16 3.16M20.42 18.84H6.58c-1.66 0-3-1.34-3-3v-3.32"
    />
    <path
      stroke="#000"
      className="dark:stroke-white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m17.26 22 3.16-3.16-3.16-3.16"
    />
  </svg>
);
export default repeat;
