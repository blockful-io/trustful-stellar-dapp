import cc from "classcat";

interface BlockfulCreditsProps extends React.ComponentPropsWithoutRef<"div"> {}

export const BlockfulCredits: React.FC<BlockfulCreditsProps> = (props) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 564 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.20739 5.1108H6.87784C6.8267 4.8267 6.73153 4.5767 6.59233 4.3608C6.45313 4.14489 6.28267 3.96165 6.08097 3.81108C5.87926 3.66051 5.65341 3.54687 5.40341 3.47017C5.15625 3.39347 4.89347 3.35511 4.61506 3.35511C4.11222 3.35511 3.66193 3.48153 3.2642 3.73438C2.86932 3.98722 2.55682 4.35795 2.3267 4.84659C2.09943 5.33523 1.9858 5.93182 1.9858 6.63636C1.9858 7.34659 2.09943 7.94602 2.3267 8.43466C2.55682 8.9233 2.87074 9.29261 3.26847 9.54261C3.66619 9.79261 4.11364 9.91761 4.6108 9.91761C4.88636 9.91761 5.14773 9.88068 5.39489 9.80682C5.64489 9.73011 5.87074 9.6179 6.07244 9.47017C6.27415 9.32244 6.4446 9.14205 6.58381 8.92898C6.72585 8.71307 6.82386 8.46591 6.87784 8.1875L8.20739 8.19176C8.13636 8.62074 7.99858 9.01562 7.79403 9.37642C7.59233 9.73438 7.33239 10.044 7.0142 10.3054C6.69886 10.5639 6.33807 10.7642 5.93182 10.9062C5.52557 11.0483 5.08239 11.1193 4.60227 11.1193C3.84659 11.1193 3.1733 10.9403 2.58239 10.5824C1.99148 10.2216 1.52557 9.70597 1.18466 9.03551C0.846591 8.36506 0.677557 7.56534 0.677557 6.63636C0.677557 5.70455 0.848011 4.90483 1.18892 4.23722C1.52983 3.56676 1.99574 3.05256 2.58665 2.6946C3.17756 2.33381 3.84943 2.15341 4.60227 2.15341C5.06534 2.15341 5.49716 2.22017 5.89773 2.35369C6.30114 2.48437 6.66335 2.67756 6.98438 2.93324C7.3054 3.18608 7.57102 3.49574 7.78125 3.86222C7.99148 4.22585 8.13352 4.64205 8.20739 5.1108ZM10.263 11V2.27273H13.3738C14.05 2.27273 14.611 2.3892 15.0571 2.62216C15.5059 2.85511 15.8412 3.17756 16.0627 3.58949C16.2843 3.99858 16.3951 4.47159 16.3951 5.00852C16.3951 5.54261 16.2829 6.01278 16.0585 6.41903C15.8369 6.82244 15.5017 7.13636 15.0528 7.3608C14.6068 7.58523 14.0457 7.69744 13.3696 7.69744H11.013V6.56392H13.2502C13.6764 6.56392 14.023 6.50284 14.29 6.38068C14.5599 6.25852 14.7573 6.08097 14.8823 5.84801C15.0073 5.61506 15.0698 5.33523 15.0698 5.00852C15.0698 4.67898 15.0059 4.39347 14.8781 4.15199C14.7531 3.91051 14.5556 3.72585 14.2858 3.59801C14.0187 3.46733 13.6679 3.40199 13.2332 3.40199H11.5798V11H10.263ZM14.5713 7.0625L16.7275 11H15.2275L13.1139 7.0625H14.5713ZM18.4774 11V2.27273H23.949V3.40625H19.7942V6.06534H23.6635V7.1946H19.7942V9.86648H24.0001V11H18.4774ZM26.9251 11H25.5274L28.668 2.27273H30.1893L33.3299 11H31.9322L29.4649 3.85795H29.3967L26.9251 11ZM27.1595 7.58239H31.6936V8.69034H27.1595V7.58239ZM33.6086 3.40625V2.27273H40.3628V3.40625H37.6398V11H36.3273V3.40625H33.6086ZM42.3354 11V2.27273H47.807V3.40625H43.6521V6.06534H47.5215V7.1946H43.6521V9.86648H47.8581V11H42.3354ZM52.8711 11H50.0458V2.27273H52.9606C53.8157 2.27273 54.5501 2.44744 55.1637 2.79688C55.7774 3.14347 56.2475 3.64205 56.5742 4.29261C56.9038 4.94034 57.0686 5.71733 57.0686 6.62358C57.0686 7.53267 56.9024 8.31392 56.57 8.96733C56.2404 9.62074 55.7632 10.1236 55.1382 10.4759C54.5132 10.8253 53.7575 11 52.8711 11ZM51.3626 9.84943H52.7987C53.4635 9.84943 54.016 9.72443 54.4564 9.47443C54.8967 9.22159 55.2262 8.85653 55.445 8.37926C55.6637 7.89915 55.7731 7.31392 55.7731 6.62358C55.7731 5.93892 55.6637 5.35795 55.445 4.88068C55.2291 4.40341 54.9066 4.04119 54.4777 3.79403C54.0487 3.54687 53.516 3.4233 52.8796 3.4233H51.3626V9.84943ZM62.8418 11V2.27273H66.0378C66.6571 2.27273 67.1699 2.375 67.5762 2.57955C67.9824 2.78125 68.2864 3.0554 68.4881 3.40199C68.6898 3.74574 68.7906 4.13352 68.7906 4.56534C68.7906 4.92898 68.7239 5.2358 68.5904 5.4858C68.4568 5.73295 68.2779 5.93182 68.0534 6.08239C67.8318 6.23011 67.5875 6.33807 67.3205 6.40625V6.49148C67.6102 6.50568 67.8929 6.59943 68.1685 6.77273C68.4469 6.94318 68.677 7.18608 68.8588 7.50142C69.0406 7.81676 69.1315 8.20028 69.1315 8.65199C69.1315 9.09801 69.0264 9.49858 68.8162 9.85369C68.6088 10.206 68.2878 10.4858 67.8531 10.6932C67.4185 10.8977 66.8631 11 66.1869 11H62.8418ZM64.1585 9.87074H66.0591C66.6898 9.87074 67.1415 9.74858 67.4142 9.50426C67.6869 9.25994 67.8233 8.95455 67.8233 8.58807C67.8233 8.3125 67.7537 8.05966 67.6145 7.82955C67.4753 7.59943 67.2764 7.41619 67.0179 7.27983C66.7622 7.14347 66.4583 7.07528 66.106 7.07528H64.1585V9.87074ZM64.1585 6.0483H65.9227C66.2182 6.0483 66.4838 5.99148 66.7196 5.87784C66.9583 5.7642 67.1472 5.60511 67.2864 5.40057C67.4284 5.19318 67.4994 4.94886 67.4994 4.66761C67.4994 4.30682 67.373 4.00426 67.1202 3.75994C66.8673 3.51562 66.4796 3.39347 65.9568 3.39347H64.1585V6.0483ZM70.5 2.27273H71.9958L74.2756 6.24006H74.3694L76.6492 2.27273H78.1449L74.9787 7.57386V11H73.6662V7.57386L70.5 2.27273Z"
        fill="#F5FFFF"
        fill-opacity="0.5"
      />
      <path
        d="M10.3049 26.9394C11.2336 27.4721 11.9623 28.2273 12.4907 29.1893C13.0192 30.1593 13.2834 31.2802 13.2834 32.5682C13.2834 33.8561 13.0192 34.9771 12.4907 35.9471C11.9623 36.917 11.2336 37.6643 10.3049 38.197C9.37605 38.7296 8.34317 39 7.20619 39C5.52474 39 4.25165 38.4593 3.3709 37.3781V38.8171H0V21.5889H3.53904V27.647C4.4278 26.6452 5.65285 26.1364 7.2142 26.1364C8.34317 26.1364 9.37605 26.4067 10.3049 26.9394ZM8.83158 35.0805C9.41609 34.4524 9.70433 33.6176 9.70433 32.5602C9.70433 31.5108 9.41609 30.6681 8.83158 30.04C8.24708 29.4119 7.50244 29.1019 6.59767 29.1019C5.69289 29.1019 4.94825 29.4119 4.36375 30.04C3.77925 30.6681 3.491 31.5029 3.491 32.5602C3.491 33.6097 3.77925 34.4524 4.36375 35.0805C4.94825 35.7085 5.69289 36.0186 6.59767 36.0186C7.51045 36.0186 8.25509 35.7085 8.83158 35.0805Z"
        fill="#F5FFFF"
        fill-opacity="0.5"
      />
      <path
        d="M16.0378 21.7711H19.8331V38.9914H16.0378V21.7711Z"
        fill="#F5FFFF"
        fill-opacity="0.5"
      />
      <path
        d="M98.1567 21.7711H101.952V38.9914H98.1567V21.7711Z"
        fill="#F5FFFF"
        fill-opacity="0.5"
      />
      <path
        d="M45.7994 38.1809C44.7665 37.6403 43.9658 36.885 43.3893 35.923C42.8128 34.961 42.5246 33.8718 42.5246 32.6475C42.5246 31.4232 42.8128 30.334 43.3893 29.372C43.9658 28.41 44.7745 27.6547 45.7994 27.1141C46.8323 26.5735 47.9933 26.3032 49.2824 26.3032C50.5635 26.3032 51.6764 26.5735 52.6293 27.1141C53.5821 27.6547 54.2787 28.4339 54.7191 29.4435L51.9887 30.9302C51.3562 29.8013 50.4514 29.2368 49.2584 29.2368C48.3376 29.2368 47.5849 29.539 46.9844 30.1511C46.3839 30.7633 46.0796 31.5981 46.0796 32.6475C46.0796 33.7049 46.3839 34.5317 46.9844 35.1439C47.5849 35.7561 48.3456 36.0582 49.2584 36.0582C50.4594 36.0582 51.3722 35.4937 51.9887 34.3648L54.7191 35.8753C54.2867 36.8532 53.5901 37.6164 52.6293 38.165C51.6764 38.7136 50.5555 38.9918 49.2824 38.9918C47.9933 38.9918 46.8323 38.7215 45.7994 38.1809Z"
        fill="#F5FFFF"
        fill-opacity="0.5"
      />
      <path
        d="M62.5255 34.1503L60.804 35.8517V39H57.2249V21.9546H60.804V31.5983L66.0325 26.6373H70.2922L65.1598 31.8766L70.7486 39H66.4168L62.5255 34.1503Z"
        fill="#F5FFFF"
        fill-opacity="0.5"
      />
      <path
        d="M77.3302 26.9468H80.549V29.6976H77.4263V38.9994H73.7832V29.6976H71.8455V26.9468H73.7832V26.3982C73.7832 24.9911 74.2075 23.878 75.0562 23.0512C75.905 22.2244 77.098 21.8109 78.6353 21.8109C79.1798 21.8109 79.7002 21.8666 80.1887 21.9858C80.6771 22.0972 81.0854 22.2641 81.4137 22.4788L80.4609 25.0706C80.0445 24.7843 79.5481 24.6333 78.9876 24.6333C77.8827 24.6333 77.3302 25.2296 77.3302 26.4221V26.9468Z"
        fill="#F5FFFF"
        fill-opacity="0.5"
      />
      <path
        d="M95.2099 26.3427V38.8088H91.839V37.3221C91.3666 37.8627 90.8061 38.2761 90.1495 38.5623C89.493 38.8485 88.7884 38.9916 88.0277 38.9916C86.4183 38.9916 85.1453 38.5226 84.2004 37.5765C83.2556 36.6383 82.7912 35.2391 82.7912 33.3867V26.3427H86.3463V32.854C86.3463 34.8654 87.171 35.8672 88.8284 35.8672C89.6771 35.8672 90.3657 35.5889 90.8782 35.0244C91.3906 34.46 91.6548 33.6252 91.6548 32.5122V26.3427H95.2099Z"
        fill="#F5FFFF"
        fill-opacity="0.5"
      />
      <path
        d="M35.8466 28.0516L39.1534 26.2072V34.6821L31.8672 38.9276V35.2784L35.8466 32.7423V28.0516Z"
        fill="#F5FFFF"
        fill-opacity="0.5"
      />
      <path
        d="M26.9351 28.0516L23.6603 26.239V34.6821L30.9385 38.9276V35.2784L26.9351 32.7423V28.0516Z"
        fill="#F5FFFF"
        fill-opacity="0.5"
      />
      <path
        d="M24.0764 25.3408L27.4153 27.2012L31.3947 24.9115L35.3741 27.2728L38.753 25.3567L31.3066 21L24.0764 25.3408Z"
        fill="#F5FFFF"
        fill-opacity="0.5"
      />
      <path
        d="M27.9282 28.0994L30.8907 26.4059V29.7769L27.9602 31.5816L27.9282 28.0994Z"
        fill="#F5FFFF"
        fill-opacity="0.5"
      />
      <path
        d="M34.8539 28.0994L31.8914 26.4059V29.7769L34.8219 31.5816L34.8539 28.0994Z"
        fill="#F5FFFF"
        fill-opacity="0.5"
      />
      <path
        d="M28.3925 32.4963L31.4111 30.6439L34.3336 32.4804L31.3711 34.3249L28.3925 32.4963Z"
        fill="#F5FFFF"
        fill-opacity="0.5"
      />
    </svg>
  );
};
