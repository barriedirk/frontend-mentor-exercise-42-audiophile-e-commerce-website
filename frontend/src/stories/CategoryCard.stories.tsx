import type { Meta, StoryObj } from "@storybook/nextjs";
import CategoryCard from "@/components/ui/CategoryCard";

const meta: Meta<typeof CategoryCard> = {
  title: "UI/CategoryCard",
  component: CategoryCard,
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
type Story = StoryObj<typeof CategoryCard>;

export const Headphones: Story = {
  args: {
    title: "Headphones",
    href: "/headphones",
    imageSrc: "/desktop/image-category-thumbnail-earphones.png",
  },
};

export const GridExample: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-[1440px] mx-auto w-full px-6">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8 pt-20">
      <CategoryCard
        title="Headphones"
        href="/headphones"
        imageSrc="/desktop/image-category-thumbnail-earphones.png"
      />
      <CategoryCard
        title="Speakers"
        href="/speakers"
        imageSrc="/desktop/image-category-thumbnail-speakers.png"
      />
      <CategoryCard
        title="Earphones"
        href="/earphones"
        imageSrc="/desktop/image-category-thumbnail-earphones.png"
      />
    </div>
  ),
};
