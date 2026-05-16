"use client";

import { ReactNode } from "react";
import Overlay from "./Overlay";
import Dialog from "./Dialog";
import Portal from "./Portal";

interface ModalProps {
  readonly isOpen: boolean;
  readonly title?: string;
  readonly titleClassName?: string;
  readonly onClose: () => void;
  readonly children: ReactNode;
  readonly titleId?: string;
  readonly containerId?: string;
  readonly size?: "sm" | "md" | "lg";
  readonly isCentered?: boolean;
}

export default function Modal({
  isOpen,
  title,
  titleId,
  titleClassName,
  onClose,
  children,
  containerId,
  size,
  isCentered = false,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <Portal containerId={containerId}>
      <Overlay onClick={onClose} isCentered={isCentered}>
        <Dialog
          title={title}
          titleClassName={titleClassName}
          titleId={titleId}
          size={size}
        >
          {children}
        </Dialog>
      </Overlay>
    </Portal>
  );
}
