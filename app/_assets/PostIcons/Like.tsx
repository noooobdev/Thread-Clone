import * as React from "react";
import { SVGProps } from "react";
const Like = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      className="dark:stroke-white"
      strokeWidth={1.996}
      d="m3.577 12.913 7.666 8.253a.998.998 0 0 0 1.462 0l7.666-8.253c2.108-2.27 2.108-5.948 0-8.218-2.108-2.269-5.525-2.269-7.634 0l-.032.035a.998.998 0 0 1-1.462 0l-.032-.035c-2.108-2.269-5.526-2.269-7.634 0-2.108 2.27-2.108 5.949 0 8.218Z"
    />
  </svg>
);
export default Like;
