import type { Preview, ReactRenderer } from "@storybook/nextjs-vite";
import { Manrope } from "next/font/google";
import "../src/styles/globals.css";
import { PartialStoryFn } from "storybook/internal/types";

// Configure the font exactly like in layout.tsx
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "700"],
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [
      (Story: PartialStoryFn<ReactRenderer>) => {
        return (
          <div className={manrope.variable}>
            <Story />
          </div>
        );
      },
    ],
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
