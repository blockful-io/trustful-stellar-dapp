import { SVGProps } from "react";
import tailwindConfig from "tailwind.config";

export const QuestCircleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill={props.color ?? tailwindConfig.theme.extend.colors.whiteOpacity05}
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8 7.77 7.77 0 0 0 8 .5zm0 13.75A6.52 6.52 0 0 1 1.25 8 6.52 6.52 0 0 1 8 1.75 6.52 6.52 0 0 1 14.75 8 6.52 6.52 0 0 1 8 14.25z" />
      <circle cx="7.98" cy="10.95" r=".76" />
      <path d="M9.73 4.75A2.72 2.72 0 0 0 8 4.19a2.28 2.28 0 0 0-2.41 2.17v.11h1.24v-.1A1.12 1.12 0 0 1 8 5.33a1 1 0 0 1 1.12 1c0 .35-.24.73-.78 1.11a2 2 0 0 0-1 1.46v.36h1.24V9a.76.76 0 0 1 .23-.51A3.92 3.92 0 0 1 9.33 8l.17-.14a2 2 0 0 0 .91-1.67 1.85 1.85 0 0 0-.68-1.44z" />
    </svg>
  );
};
