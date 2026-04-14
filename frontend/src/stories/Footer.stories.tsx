import type { Meta, StoryObj } from "@storybook/nextjs";
import Footer from "@/components/layout/Footer";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

export const StickyTest: Story = {
  render: () => (
    <div className="h-[200vh] bg-gray-100">
      <Footer />
    </div>
  ),
};
