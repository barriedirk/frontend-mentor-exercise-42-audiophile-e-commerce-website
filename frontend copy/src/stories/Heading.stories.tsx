import type { Meta, StoryObj } from "@storybook/nextjs";
import Heading from "@/components/ui/Heading";

const meta: Meta<typeof Heading> = {
  title: "UI/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    text: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Headphones: Story = {
  args: {
    level: "h2",
    text: "HEADPHONES",
  },
};

export const Speakers: Story = {
  args: {
    level: "h2",
    text: "SPEAKERS",
  },
};

export const Earphones: Story = {
  args: {
    level: "h2",
    text: "EARPHONES",
  },
};
