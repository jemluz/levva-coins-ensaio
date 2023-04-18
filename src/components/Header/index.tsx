import { HeaderContainer, HeaderContent, NewCategoryButton, NewTransactionButton, UserAvatar } from "./styles";
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <div>
          <NewCategoryButton>Nova Categoria</NewCategoryButton>
          <NewTransactionButton>Nova Transação</NewTransactionButton>
        </div>
      </HeaderContent>
      <UserAvatar src="https://github.com/jemluz.png" alt="" />

    </HeaderContainer>
  )
}