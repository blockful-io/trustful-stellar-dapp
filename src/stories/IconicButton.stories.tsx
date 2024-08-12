import { IconicButton, ArrowIcon } from "@/components/atoms";
import type { Meta, StoryObj } from "@storybook/react";
import { IconPosition } from "@/types/iconPosition";

const meta = {
  title: "TrustfulStellar/IconicButton",
  component: IconicButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "select" },
  },
  args: { icon: <ArrowIcon />, label: "Label", onClick: () => {} },
} satisfies Meta<typeof IconicButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonWithIconInTheLeft: Story = {
  args: { icon: <ArrowIcon />, label: "My custom label", onClick: () => {} },
};

export const ButtonWithIconInTheRight: Story = {
  args: {
    icon: <ArrowIcon />,
    label: "My custom label",
    onClick: () => {},
    iconPosition: IconPosition.RIGHT,
  },
};

export const ImportButtonExample: Story = {
  args: {
    icon: <ArrowIcon />,
    label: "Import",
    onClick: () => alert("Execute import action"),
  },
};

export const ReimportButtonExample: Story = {
  args: {
    icon: (
      <div className="transform rotate-180">
        <ArrowIcon />
      </div>
    ),
    label: "Re-import",
    onClick: () => alert("Execute re-import action"),
  },
};
