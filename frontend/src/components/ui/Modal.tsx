"use client";

import { ReactNode } from "react";
import Overlay from "./Overlay";
import Dialog from "./Dialog";
import Portal from "./Portal";

interface ModalProps {
  readonly open: boolean;
  readonly title?: string;
  readonly titleClassName?: string;
  readonly onClose: () => void;
  readonly children: ReactNode;
  readonly titleId?: string;
}

export default function Modal({
  open,
  title,
  titleId,
  titleClassName,
  onClose,
  children,
}: ModalProps) {
  if (!open) return null;

  return (
    <Portal>
      <Overlay onClick={onClose}>
        <Dialog title={title} titleClassName={titleClassName} titleId={titleId}>
          {children}
        </Dialog>
      </Overlay>
    </Portal>
  );
}
