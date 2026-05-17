"use client";

import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  readonly children: ReactNode;
  readonly containerId?: string;
}

export default function Portal({
  children,
  containerId = "modal-root",
}: PortalProps) {
  if (globalThis.window === undefined) return null;

  const container = document.getElementById(containerId);

  if (!container) return null;

  return createPortal(children, container);
}
