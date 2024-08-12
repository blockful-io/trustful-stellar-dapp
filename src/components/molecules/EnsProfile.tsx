import { Address } from "viem";
import { useEffect, useState } from "react";
import { normalize } from "viem/ens";
import { publicClient } from "@/lib/wallet/wallet-config";
import { getName } from "@ensdomains/ensjs/public";
import Avatar from "boring-avatars";
import { getEnsAvatar } from "viem/actions";

interface UserState {
  avatar: string | null;
  name: string | null;
  isLoading: boolean;
}

interface EnsProfileProps {
  address: Address;
}

export const EnsProfile = ({ address }: EnsProfileProps) => {
  const [user, setUser] = useState<UserState>({
    avatar: null,
    name: null,
    isLoading: true,
  });

  useEffect(() => {
    const getEnsUser = async () => {
      try {
        const getNameResult = await getName(publicClient, {
          address: address,
        });

        const ensAvatar = getNameResult?.name
          ? await getEnsAvatar(publicClient, {
              name: normalize(getNameResult?.name),
            })
          : null;

        setUser({
          avatar: ensAvatar ?? null,
          name: getNameResult?.name ?? null,
          isLoading: false,
        });
      } catch (error) {
        console.error("Error fetching ENS user data:", error);
        setUser((prevState) => ({ ...prevState, isLoading: false }));
      }
    };

    getEnsUser();
  }, [address]);

  if (user.isLoading) {
    return (
      <div className="flex gap-2 items-center">
        <div className="animate-pulse rounded-full bg-gray w-[25px] h-[25px]"></div>
        <div className="animate-pulse bg-gray h-3 w-32 rounded-md"></div>
      </div>
    );
  }

  return (
    <div className="flex gap-2 items-center justify-start font-dm text-base">
      {user.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          width={25}
          height={25}
          alt="profile"
          src={user.avatar}
          className="rounded-full"
        />
      ) : (
        <Avatar
          size={25}
          variant="beam"
          name="Alice Paul"
          colors={["#D4ED7A", "rgba(212, 237, 122, 0.12)"]}
        />
      )}
      {user.name ? user.name : ellipseAddress(address)}
    </div>
  );
};
