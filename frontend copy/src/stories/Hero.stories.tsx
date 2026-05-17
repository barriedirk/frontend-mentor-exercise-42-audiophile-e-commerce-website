import type { Meta, StoryObj } from "@storybook/nextjs";
import Hero from "@/features/home/components/Hero";

const meta: Meta<typeof Hero> = {
  title: "Home/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};
