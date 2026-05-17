import type { Meta, StoryObj } from "@storybook/nextjs";
import Dialog from "@/components/ui/Dialog";
import Button from "@/components/ui/Button";

const meta: Meta<typeof Dialog> = {
  title: "UI/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex flex-col items-start gap-4">
        <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
          ✓
        </div>
        <h2 className="text-h6 uppercase font-bold">
          Thank You For Your Order
        </h2>
        <p className="text-black/50">
          You will receive an email confirmation shortly.
        </p>
        <Button variant="primary" fullWidth>
          Back to Home
        </Button>
      </div>
    ),
  },
};
