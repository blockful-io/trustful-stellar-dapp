import { useState, useRef, useEffect } from "react";
import { DisconnectIcon, UserIcon } from "@/components/atoms";
import { useAuthContext } from "@/components/auth/Context";
import tailwindConfig from "tailwind.config";
import cc from "classcat";
import { getEllipsedAddress } from "@/lib/utils/getEllipsedAddress";

export const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { setUserAddress, userAddress } = useAuthContext();
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const disconnect = () => {
    setUserAddress("");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div
          className={cc([
            {
              "text-brandWhite border bg-whiteOpacity008": !isOpen,
              "text-brandBlack bg-brandGreen": isOpen,
            },
            "border-whiteOpacity008 rounded-lg p-2",
          ])}
        >
          <div className="flex items-center justify-center gap-2">
            <UserIcon
              className="w-7"
              color={
                isOpen
                  ? tailwindConfig.theme.extend.colors.brandBlack
                  : tailwindConfig.theme.extend.colors.brandGreen
              }
            />
            <h2>
              {getEllipsedAddress(userAddress)}
            </h2>
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="z-50 origin-top-right border-whiteOpacity008 border absolute right-0 mt-2 w-[15vw] rounded-md shadow-lg bg-brandBlack">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              disabled
              className="flex justify-between items-center gap-2 cursor-not-allowed p-3 text-base hover:bg-whiteOpacity05 w-full text-left transition-colors duration-300"
              role="menuitem"
            >
              <div className="flex items-center justify-center gap-2">
                <UserIcon
                  className="w-7"
                  color={tailwindConfig.theme.extend.colors.brandGreen}
                />
                <h2>Profile</h2>
              </div>

              <div className="py-1 px-2 text-xs text-whiteOpacity05 text-center rounded-full bg-whiteOpacity005 bg-opacity-10">
                Coming Soon
              </div>
            </button>
            <button
              onClick={disconnect}
              className="flex gap-2 items-center p-3 text-base hover:bg-whiteOpacity05 w-full transition-colors duration-300"
              role="menuitem"
            >
              <DisconnectIcon
                color={tailwindConfig.theme.extend.colors.brandGreen}
                className="w-6"
              />
              <h2>Disconnect</h2>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
