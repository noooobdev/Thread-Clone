import * as React from "react";
import { SVGProps } from "react";
const Share = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.8}
      d="m9.978 11.974 1.725 7.76c.098.44.683.535.915.148L20.5 6.742a.499.499 0 0 0-.428-.755H4.343a.499.499 0 0 0-.325.878l5.96 5.11Zm0 0 9.979-5.488"
    />
  </svg>
);
export default Share;
