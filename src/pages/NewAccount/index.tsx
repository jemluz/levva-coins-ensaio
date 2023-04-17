import { AuthLayout } from "../../layouts/AuthLayout";

export function NewAccount() {
  return (
    <AuthLayout
      title="Cadastro"
      subtitle="Crie sua conta e começe a gerenciar suas finanças."
    >
      <form>
        <input type="name" placeholder="Nome e sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirme a senha" />
        <button type="submit">Entrar</button>
      </form>
    </AuthLayout>
  )
}