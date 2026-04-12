// import type { Meta, StoryObj } from "@storybook/nextjs";
// import Modal from "@/components/ui/Modal";
// import Button from "@/components/ui/Button";

// const meta: Meta<typeof Modal> = {
//   title: "UI/Modal",
//   component: Modal,
//   tags: ["autodocs"],
//   // This is important! Modals need a large area to render
//   parameters: {
//     layout: "fullscreen",
//   },
// };

// export default meta;
// type Story = StoryObj<typeof Modal>;

// export const Default: Story = {
//   args: {
//     isOpen: true,
//     onClose: () => console.warn("Modal closed"),
//     children: (
//       <div className="p-8 bg-white rounded-lg max-w-md">
//         <h2 className="text-h6 uppercase mb-4">Order Confirmation</h2>
//         <p className="mb-6">You will receive an email confirmation shortly.</p>
//         <Button variant="primary" fullWidth>
//           Back to Home
//         </Button>
//       </div>
//     ),
//   },
// };

import type { Meta, StoryObj } from "@storybook/nextjs";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  tags: ["autodocs"],
  // This is important! Modals need a large area to render
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => console.warn("Modal closed"),
    children: (
      <div className="p-8 bg-white rounded-lg max-w-md">
        <h2 className="text-h6 uppercase mb-4">Order Confirmation</h2>
        <p className="mb-6">You will receive an email confirmation shortly.</p>
        <Button variant="primary" fullWidth>
          Back to Home
        </Button>
      </div>
    ),
  },
};
