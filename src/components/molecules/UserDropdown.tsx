import { useState, useRef, useEffect } from "react";
import { Address } from "viem";
import { EnsProfile } from "./index";
import { DisconnectIcon, UserIcon } from "@/components/atoms";
import { useDisconnect } from "wagmi";

interface UserDropdownProps {
  address: Address;
}

export const UserDropdown = ({ address }: UserDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const disconnect = useDisconnect();

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
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
      className="border border-primary rounded-lg p-2 text-gray"
    >
      <EnsProfile address={address} />
    </div>
      </button>

      {isOpen && (
        <div className="z-50 origin-top-right border-primary border absolute right-0 mt-2 w-[220px] rounded-md shadow-lg bg-grey02">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => {
                disconnect.disconnect();
              }}
              className="flex gap-2 items-center hover:bg-primary p-3 text-base text-whiteOpacity005 hover:bg-gray-100 w-full text-left transition-colors duration-300"
              role="menuitem"
            >
              <DisconnectIcon />
              <h2 className="text-gray">Disconnect</h2>
            </button>

            <button
              disabled
              className="flex justify-between items-center gap-2 cursor-not-allowed p-3 text-base text-whiteOpacity005 hover:bg-gray-100 w-full text-left transition-colors duration-300"
              role="menuitem"
            >
              <div className="flex items-center justify-center gap-2">
                <UserIcon />
                <h2 className="text-whiteOpacity005">Profile</h2>
              </div>

              <div className="py-1 px-2 text-xs rounded-full bg-whiteOpacity008 bg-opacity-10 font-medium">
                COMING SOON
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
