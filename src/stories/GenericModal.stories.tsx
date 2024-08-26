import { GenericModal } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";

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
    communicateMainCtaTxSuccess: () => {},
    onMainCtaClick: () => new Promise((res, rej) => res("0x")),
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
    onMainCtaClick: () => new Promise((res, rej) => alert("Did something")),
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
      <div className="p-2 w-full h-full align-center justify-center flex flex-col">
        <>Connect Wallet</>
      </div>
    ),
  },
};
