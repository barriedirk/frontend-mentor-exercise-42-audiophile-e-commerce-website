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

export const DesktopTest: Story = {
  render: () => (
    <div className="h-[200vh] max-w[1440px]">
      <Hero />
    </div>
  ),
};

export const TabletTest: Story = {
  render: () => (
    <div className="h-[200vh] max-w[768px] w-full">
      <Hero />
    </div>
  ),
};

export const MobileTest: Story = {
  render: () => (
    <div className="h-[200vh] max-w[375px] w-full">
      <Hero />
    </div>
  ),
};
