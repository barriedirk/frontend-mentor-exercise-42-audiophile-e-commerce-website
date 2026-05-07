import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Interactive: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-10 flex justify-center">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>

        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="p-8 bg-white rounded-lg max-w-md">
            <h2 className="text-[24px] font-bold uppercase mb-4 text-black">
              Order Confirmation
            </h2>
            <p className="mb-6 text-black/50">
              You will receive an email confirmation shortly.
            </p>
            <Button
              variant="primary"
              onClick={() => setIsOpen(false)}
              fullWidth
            >
              Back to Home
            </Button>
          </div>
        </Modal>
      </div>
    );
  },
};
