import { SVGProps } from "react";
import tailwindConfig from "tailwind.config";

export const DisconnectIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_4118_148)">
        <path
          d="M13.743 7.61797C14.0848 7.27617 14.0848 6.72109 13.743 6.3793L10.243 2.8793C9.90117 2.5375 9.34609 2.5375 9.0043 2.8793C8.6625 3.22109 8.6625 3.77617 9.0043 4.11797L11.0113 6.125H5.25C4.76602 6.125 4.375 6.51602 4.375 7C4.375 7.48398 4.76602 7.875 5.25 7.875H11.0113L9.0043 9.88203C8.6625 10.2238 8.6625 10.7789 9.0043 11.1207C9.34609 11.4625 9.90117 11.4625 10.243 11.1207L13.743 7.6207V7.61797ZM4.375 2.625C4.85898 2.625 5.25 2.23398 5.25 1.75C5.25 1.26602 4.85898 0.875 4.375 0.875H2.625C1.17578 0.875 0 2.05078 0 3.5V10.5C0 11.9492 1.17578 13.125 2.625 13.125H4.375C4.85898 13.125 5.25 12.734 5.25 12.25C5.25 11.766 4.85898 11.375 4.375 11.375H2.625C2.14102 11.375 1.75 10.984 1.75 10.5V3.5C1.75 3.01602 2.14102 2.625 2.625 2.625H4.375Z"
          fill={props.color ?? tailwindConfig.theme.extend.colors.brandWhite}
        />
      </g>
      <defs>
        <clipPath id="clip0_4118_148">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
