import type { Meta, StoryObj } from "@storybook/nextjs";
import CategoryLinks from "@/components/ui/CategoryLinks";

const meta: Meta<typeof CategoryLinks> = {
  title: "UI/CategoryLinks",
  component: CategoryLinks,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="pt-20">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CategoryLinks>;
export const Default: Story = {};
