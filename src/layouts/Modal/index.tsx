import { ReactNode } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";

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
        <Overlay>
          <Content>
            <Dialog.Title>{title}</Dialog.Title>

            <CloseButton>
              <X size={24} />
            </CloseButton>

            {children}
          </Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}