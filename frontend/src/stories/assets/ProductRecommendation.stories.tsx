import type { Meta, StoryObj } from "@storybook/nextjs";
import ProductRecommendation from "@/components/ui/ProductRecommendation";

const meta: Meta<typeof ProductRecommendation> = {
  title: "UI/ProductRecommendation",
  component: ProductRecommendation,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-10  mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductRecommendation>;

export const Default: Story = {
  args: {
    name: "XX99 Mark I",
    imageSrc: "/desktop/image-xx99-mark-one-headphones.jpg",
  },
};

export const RecommendationGrid: Story = {
  decorators: [
    (Story) => (
      <div className="p-10 w-full max-w-[1440px] mx-auto">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8">
      <ProductRecommendation
        name="XX99 Mark I"
        imageSrc="/desktop/image-xx99-mark-one-headphones.jpg"
      />
      <ProductRecommendation
        name="XX59"
        imageSrc="/desktop/image-xx59-headphones.jpg"
      />
      <ProductRecommendation
        name="ZX9 Speaker"
        imageSrc="/desktop/image-zx9-speaker.jpg"
      />
    </div>
  ),
};
