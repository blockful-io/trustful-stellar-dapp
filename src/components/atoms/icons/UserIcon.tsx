import { SVGProps } from "react";

export const UserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <path
        d="M7.0001 6.99999C7.7427 6.99999 8.45489 6.705 8.98 6.17989C9.5051 5.65479 9.8001 4.9426 9.8001 4.19999C9.8001 3.45739 9.5051 2.7452 8.98 2.22009C8.45489 1.69499 7.7427 1.39999 7.0001 1.39999C6.25749 1.39999 5.5453 1.69499 5.0202 2.22009C4.4951 2.7452 4.2001 3.45739 4.2001 4.19999C4.2001 4.9426 4.4951 5.65479 5.0202 6.17989C5.5453 6.705 6.25749 6.99999 7.0001 6.99999ZM6.00041 8.04999C3.84572 8.04999 2.1001 9.79562 2.1001 11.9503C2.1001 12.3091 2.39104 12.6 2.74979 12.6H11.2504C11.6092 12.6 11.9001 12.3091 11.9001 11.9503C11.9001 9.79562 10.1545 8.04999 7.99978 8.04999H6.00041Z"
        fill={props.color ?? "#F5FFFF"}
        fillOpacity="0.5"
      />
    </svg>
  );
};
