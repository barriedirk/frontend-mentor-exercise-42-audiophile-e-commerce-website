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
    isNewProduct: true,
    images: {
      mobile:
        "/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
      tablet:
        "/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg",
      desktop:
        "/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
    },
    name: "XX99 Mark II",
    title: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  },
};

export const Reverse: Story = {
  args: {
    reversed: true,
    name: "XX99 Mark I",
    title: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    images: {
      mobile:
        "/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
      tablet:
        "/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
      desktop:
        "/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
    },
  },
};
