import { GenericModal, StarIcon } from "@/components";
import { AttestationSymbol } from "@/components/atoms/AttestationSymbol";
import { WalletIcon } from "@/components/atoms/icons/WalletIcon";
import { ImportBadgesModalContent } from "@/components/molecules/ImportBadgesModalContent";
import type { Meta, StoryObj } from "@storybook/react";
import tailwindConfig from "tailwind.config";

const meta = {
  title: "TrustfulStellar/GenericModal",
  component: GenericModal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
    buttonLabel: { control: "text" },
    children: { control: "select" },
    isOpen: { control: "boolean" },
  },
  args: {
    isOpen: true,
    children: <></>,
    onClose: () => {},
    title: "My modal title",
    buttonLabel: "My custom label",
    onButtonClick: () => {},
  },
} satisfies Meta<typeof GenericModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OpenedModal: Story = {};

export const ModalWithContent: Story = {
  args: {
    children: (
      <div>
        <p className="p-8">Any content wanted</p>
      </div>
    ),
  },
};

export const ModalWithoutTitle: Story = {
  args: {
    title: "",
  },
};

export const ModalWithCustomTitle: Story = {
  args: {
    title: "My custom title",
  },
};

export const ModalWithCustomActionOnClose: Story = {
  args: {
    onClose: () => alert("Close modal action executed"),
  },
};

export const ModalWithCustomActionOnCtaClick: Story = {
  args: {
    onButtonClick: () => new Promise((res, rej) => alert("Did something")),
  },
};

export const ModalWithCustomCtaLabel: Story = {
  args: {
    buttonLabel: "My custom label",
  },
};

export const ClosedModal: Story = {
  args: {
    isOpen: false,
  },
};

export const ConnectWalletModal: Story = {
  args: {
    isOpen: true,
    buttonLabel: "Connect",
    title: "Connect Wallet",
    children: (
      <div className="p-2 w-full h-full items-center justify-center flex flex-col">
        <div className="my-8 p-8 pt-6 w-[150px] h-[150px] rounded-full bg-whiteOpacity005 items-center justify-center">
          <WalletIcon
            color={tailwindConfig.theme.extend.colors.brandGreen}
          ></WalletIcon>
        </div>
        <div className="text-center">
          <span>
            Please connect your wallet to import badges from GitHub Soroban.
          </span>
        </div>
      </div>
    ),
  },
};

export const ImportBadgesModal: Story = {
  args: {
    isOpen: true,
    buttonLabel: "Import",
    title: "Import attestations",
    children: (
      <ImportBadgesModalContent
        badges={[
          {
            description: "L1: Payment Operations",
            isImported: true,
            assetCode: "1",
            score: 3,
          },
          {
            description: "L2: Configuration Operations",
            isImported: true,
            assetCode: "1",
            score: 3,
          },
          {
            description: "L3: Advanced Operations",
            isImported: false,
            assetCode: "1",
            score: 3,
          },
          {
            description: "Side Quest 1",
            isImported: true,
            assetCode: "1",
            score: 3,
          },
          {
            description: "Side Quest 2",
            isImported: false,
            assetCode: "1",
            score: 3,
          },
          {
            description: "Side Quest 3",
            isImported: false,
            assetCode: "1",
            score: 3,
          },
        ]}
        title="Stellar Quest"
        icon={<StarIcon></StarIcon>}
        importSingleAsset={(assetCode) => {
          console.log(assetCode);
        }}
      />
    ),
  },
};
