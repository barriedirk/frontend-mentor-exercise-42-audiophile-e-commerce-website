import type { Meta, StoryObj } from "@storybook/nextjs";
import InTheBoxItem from "@/components/ui/InTheBoxItem";

const meta: Meta<typeof InTheBoxItem> = {
  title: "UI/InTheBoxItem",
  component: InTheBoxItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InTheBoxItem>;

export const Default: Story = {
  args: {
    quantity: 1,
    item: "Replacement Ear Tips",
  },
};

export const ListExample: Story = {
  render: () => (
    <ul className="flex flex-col gap-2">
      <InTheBoxItem quantity={1} item="Earphone Unit" />
      <InTheBoxItem quantity={6} item="Multi-size Ear Tips" />
      <InTheBoxItem quantity={1} item="User Guide" />
      <InTheBoxItem quantity={1} item="USB-C Charging Cable" />
      <InTheBoxItem quantity={1} item="Travel Pouch" />
    </ul>
  ),
};
