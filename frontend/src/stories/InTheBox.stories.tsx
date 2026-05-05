import type { Meta, StoryObj } from "@storybook/nextjs";
import InTheBox from "@/components/ui/InTheBox";

const meta: Meta<typeof InTheBox> = {
  title: "UI/InTheBox",
  component: InTheBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InTheBox>;

export const Default: Story = {
  args: {
    includes: [
      {
        quantity: 2,
        item: "Earphone unit",
      },
      {
        quantity: 6,
        item: "Multi-size earplugs",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "USB-C charging cable",
      },
      {
        quantity: 1,
        item: "Travel pouch",
      },
    ],
  },
};
