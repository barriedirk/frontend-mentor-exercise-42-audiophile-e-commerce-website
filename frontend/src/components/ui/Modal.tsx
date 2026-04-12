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
}

export default function Modal({
  isOpen,
  title,
  titleId,
  titleClassName,
  onClose,
  children,
  containerId,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <Portal containerId={containerId}>
      <Overlay onClick={onClose}>
        <Dialog title={title} titleClassName={titleClassName} titleId={titleId}>
          {children}
        </Dialog>
      </Overlay>
    </Portal>
  );
}
