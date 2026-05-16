import { useRef } from "react";

export function useFocusFirstInput<T extends HTMLElement = HTMLFormElement>() {
  // Use a ref to store a persistent reference to the observer across renders
  const observerRef = useRef<MutationObserver | null>(null);

  const containerRef = (node: T | null) => {
    // 🧹 CLEANUP: If the component unmounts or node changes, clean up the old observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    if (!node) return;

    const focusInput = () => {
      const firstInput = node.querySelector<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLElement
      >('input, textarea, select, [tabindex]:not([tabindex="-1"])');
      firstInput?.focus();
    };

    focusInput();

    const observer = new MutationObserver(() => {
      focusInput();
      observer.disconnect();
      observerRef.current = null;
    });

    observerRef.current = observer;
    observer.observe(node, { childList: true, subtree: true });
  };

  return containerRef;
}
