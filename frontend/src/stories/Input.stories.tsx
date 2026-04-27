import type { Meta, StoryObj } from "@storybook/nextjs";
import Input from "@/components/ui/Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["idle", "error"],
      description: "Manual state override",
    },
    layout: {
      control: "radio",
      options: ["full", "half"],
    },
    error: {
      control: "text",
      description: "Error message. When present, it forces the error state.",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Idle: Story = {
  args: {
    label: "Name",
    placeholder: "Alexei Ward",
    state: "idle",
  },
};

export const WithError: Story = {
  args: {
    label: "Email Address",
    placeholder: "alexei@mail.com",
    error: "Wrong format",
  },
};

export const HalfWidth: Story = {
  args: {
    label: "Zip Code",
    placeholder: "10001",
    layout: "half",
  },
};
