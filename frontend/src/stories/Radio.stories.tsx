import type { Meta, StoryObj } from "@storybook/nextjs";
import Radio from "@/components/ui/Radio";

const meta: Meta<typeof Radio> = {
  title: "UI/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Toggles the active/selected visual state",
    },
    label: {
      control: "text",
      description: "The text displayed next to the radio button",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: "e-Money",
    checked: false,
    name: "payment-method",
  },
};

export const Selected: Story = {
  args: {
    label: "Cash on Delivery",
    checked: true,
    name: "payment-method",
  },
};

/**
 * Example of how they look in a group
 */
export const RadioGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[300px]">
      <Radio
        label="e-Money"
        checked={true}
        name="group1"
        readOnly
        value="one"
      />
      <Radio
        label="Cash on Delivery"
        checked={false}
        name="group1"
        readOnly
        value="two"
      />
    </div>
  ),
};
