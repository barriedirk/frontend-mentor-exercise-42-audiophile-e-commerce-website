import type { Meta, StoryObj } from "@storybook/nextjs";
import Header from "@/components/layout/Header";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const StickyTest: Story = {
  render: () => (
    <div className="h-[200vh] bg-gray-100">
      <Header />
      <div className="p-10 text-center">
        Scroll down to test the sticky behavior and z-index.
      </div>
    </div>
  ),
};
