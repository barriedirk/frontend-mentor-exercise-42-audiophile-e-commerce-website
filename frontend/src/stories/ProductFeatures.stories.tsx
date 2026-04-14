import type { Meta, StoryObj } from "@storybook/nextjs";
import ProductFeatures from "@/components/ui/ProductFeatures";

const meta: Meta<typeof ProductFeatures> = {
  title: "UI/ProductFeatures",
  component: ProductFeatures,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-10 max-w-[1110px] mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductFeatures>;

export const Default: Story = {
  args: {
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy uninterrupted listening time. \n\nWith high-resolution audio and noise-canceling technology, you can enjoy your music without any background interference.",
  },
};
