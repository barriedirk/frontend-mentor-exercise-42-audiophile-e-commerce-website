import type { Meta, StoryObj } from "@storybook/nextjs";
import QuantitySelector from "@/components/ui/QuantitySelector";

const meta: Meta<typeof QuantitySelector> = {
  title: "UI/QuantitySelector",
  component: QuantitySelector,
  tags: ["autodocs"],
  argTypes: {
    quantity: {
      control: { type: "number", min: 1 },
      description: "The current count displayed",
    },
    onIncrement: {
      action: "incremented",
      description: "Callback fired when + is clicked",
    },
    onDecrement: {
      action: "decremented",
      description: "Callback fired when - is clicked",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof QuantitySelector>;

export const Default: Story = {
  args: {
    quantity: 1,
  },
};

export const InCart: Story = {
  args: {
    quantity: 3,
  },
};
