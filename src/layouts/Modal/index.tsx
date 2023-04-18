import { ReactNode } from "react";
import * as Dialog from '@radix-ui/react-dialog';

interface ModalLayoutProps {
  title: string;
  trigger: ReactNode;
  children: ReactNode;
}

export function ModalLayout({
  title,
  trigger,
  children,
}: ModalLayoutProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content>
            <Dialog.Title>{title}</Dialog.Title>

            <Dialog.Close />

            {children}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}