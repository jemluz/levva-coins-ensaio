import { HeaderContainer, HeaderContent, NewCategoryButton, NewTransactionButton, UserAvatar } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from '../../assets/logo.svg';
import { ModalLayout } from "../../layouts/Modal";
import { ReactNode } from "react";

export function Header() {
  const newCategoryButton: ReactNode = <NewCategoryButton>Nova Categoria</NewCategoryButton>;

  const newTransactionButton: ReactNode = <NewTransactionButton>Nova Transação</NewTransactionButton>;

  const userAvatar: ReactNode = <UserAvatar src="https://github.com/jemluz.png" alt="" />;

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <div>
          <ModalLayout title="Nova Categoria" trigger={newCategoryButton}>
          </ModalLayout>

          <ModalLayout title="Nova Transação" trigger={newTransactionButton}>
          </ModalLayout>
        </div>

      </HeaderContent>
      <ModalLayout title="Meu Perfil" trigger={userAvatar}>
        <Form>
          <UserAvatar src="https://github.com/jemluz.png" alt="Foto de perfil" variant="large" />
          <FormInput type="email" value="Jemima Luz" />
          <FormInput type="email" placeholder="jemima.luz@levva.io" disabled />
          <FormButton type="submit">Atualizar</FormButton>
        </Form>
      </ModalLayout>

    </HeaderContainer>
  )
}