import type { Meta, StoryObj } from "@storybook/nextjs";
import Picture from "@/components/ui/Picture";

const meta: Meta<typeof Picture> = {
  title: "UI/Picture",
  component: Picture,
  tags: ["autodocs"],
  argTypes: {
    alt: {
      control: "text",
      description: "Image alt text",
    },
    mobile: {
      control: "text",
      description: "Mobile image path",
    },
    tablet: {
      control: "text",
      description: "Tablet image path",
    },
    desktop: {
      control: "text",
      description: "Desktop image path",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Picture>;

export const Default: Story = {
  args: {
    alt: "XX99 Mark I",
    mobile:
      "/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
    tablet:
      "/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
    desktop:
      "/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
  },
};
