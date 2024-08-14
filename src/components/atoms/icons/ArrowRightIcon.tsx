import { SVGProps } from "react";

export const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 13L23 13"
        stroke={props.color ?? "black"}
        strokeWidth="1.5"
      />
      <path
        d="M12 1L24 13L12 25"
        stroke={props.color ?? "black"}
        strokeWidth="1.5"
      />
    </svg>
  );
};
