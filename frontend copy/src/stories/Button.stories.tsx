import type { Meta, StoryObj } from "@storybook/nextjs";
import Button from "@/components/ui/Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost"],
      description: "The visual style of the button",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "The size of the button",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the button takes up the full container width",
    },
    children: {
      control: "text",
      description: "The text or elements inside the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "See Product",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "See Product",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Shop Now",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: (
      <>
        Shop <span className="text-primary">{">"}</span>
      </>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    variant: "primary",
    fullWidth: true,
    children: "Checkout",
  },
};
