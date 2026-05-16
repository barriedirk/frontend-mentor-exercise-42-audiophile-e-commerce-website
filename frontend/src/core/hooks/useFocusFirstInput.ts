export function useFocusFirstInput<T extends HTMLElement = HTMLFormElement>() {
  const containerRef = (node: T | null) => {
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
    });

    observer.observe(node, { childList: true, subtree: true });
  };

  return containerRef;
}
