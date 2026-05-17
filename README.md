# Frontend Mentor - Audiophile e-commerce website

![Design preview for the Audiophile e-commerce website coding challenge](./preview.jpg)

- [Github](https://github.com/barriedirk/frontend-mentor-exercise-42-audiophile-e-commerce-website)
- [Live Demo](https://audiophile-e-commerce-website-web-a.vercel.app/)
- [Storybook](https://story-book-audiophile-e-commerce-we.vercel.app/)
- [Repository Frontend Mentor](https://www.frontendmentor.io/solutions/audiophile-e-commerce-website-y5Jp3150t)



**# 🎧 Audiophile E-Commerce - Frontend Client

Welcome to the **Audiophile E-Commerce Frontend**, a premium, high-performance presentation layer tailored for an exceptional audio hardware shopping experience. This client application is engineered to deliver a responsive, accessible, and visually striking interface that perfectly encapsulates the Audiophile brand.

---

## 🛠️ Tech Stack & Architecture

This project is built using modern frontend paradigms to ensure scalability, robust performance, and maintainability. 

### Core Technologies
- **Framework:** Next.js (utilizing the App Router and Server Actions for optimal performance and SEO)
- **Styling:** Tailwind CSS v4 (for utility-first, rapid, and consistent UI design)
- **Forms & Validation:** React Hook Form
- **State Management:** Zustand (for lightweight, unopinionated global state management)

### Directory Structure Framework
Our architecture enforces a strict separation of concerns:
- **Presentational UI Layer (`/src/components`, `/src/app`):** Focused purely on rendering the user interface, managing layout, and visual interactions without being bloated by complex business logic.
- **Core Logic Hook Directory (`/src/core`):** Acts as the central hub for the frontend's business requirements. All state management (`/store`), data fetching (`/services`), complex business logic (`/logic`), and custom hooks (`/hooks`) live here. This isolation ensures that the UI components remain pure and highly testable.

---

## 🚀 Getting Started & Local Development

Follow these steps to set up the frontend environment locally.

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   We use `pnpm` as our package manager for fast and efficient installations.
   ```bash
   pnpm install
   ```

3. **Boot the application:**
   Start the Next.js development server.
   ```bash
   pnpm run dev
   ```

4. **View the application:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## 🎨 UI Component Isolation with Storybook

We utilize **Storybook** for isolated UI component development and visual testing. This allows us to inspect atomic design tokens, form inputs, and complex layouts independently of the main application state.

- **Run Storybook locally:**
  ```bash
  pnpm run storybook
  ```
  This will start the Storybook server, automatically opening your browser to [http://localhost:6006](http://localhost:6006).

- **Build Storybook for deployment:**
  ```bash
  pnpm run build-storybook
  ```
  This generates a static Storybook build that can be hosted independently.

---

