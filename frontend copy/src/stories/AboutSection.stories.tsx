import type { Meta, StoryObj } from "@storybook/nextjs";
import AboutSection from "@/components/shared/AboutSection";

const meta: Meta<typeof AboutSection> = {
  title: "Shared/AboutSection",
  component: AboutSection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-10 max-w-[1440px] mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AboutSection>;

export const Default: Story = {};
