import { SearchBar } from "@/components/molecules/SearchBar";
import { Meta, StoryObj } from "@storybook/react/*";
import { useState } from "react";

const meta = {
  title: "TrustfulStellar/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  args: {
    placeholder: "",
    onButtonClick: (value) => {
      console.log(value);
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchBarWithNoInput: Story = {
  args: {
    placeholder: "Paste the address...",
    input: "",
    onChangeInput: () => {},
  },
  render: function (args) {
    const [value, setValue] = useState("");
    return (
      <div className="w-[300px]">
        <SearchBar {...args} input={value} onChangeInput={setValue} />
      </div>
    );
  },
};
