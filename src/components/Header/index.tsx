import { HeaderContainer, HeaderContent, NewCategoryButton, NewTransactionButton, UserAvatar } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <div>
          <NewCategoryButton>Nova Categoria</NewCategoryButton>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova Transação</NewTransactionButton>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay>
                <Dialog.Content>
                  <Dialog.Title>Nova transação</Dialog.Title>

                  <Dialog.Close />
                </Dialog.Content>
              </Dialog.Overlay>
            </Dialog.Portal>
          </Dialog.Root>
        </div>

      </HeaderContent>
      <UserAvatar src="https://github.com/jemluz.png" alt="" />

    </HeaderContainer>
  )
}