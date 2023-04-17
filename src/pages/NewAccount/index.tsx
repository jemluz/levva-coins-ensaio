import { AuthLayout } from "../../layouts/AuthLayout";
import { Form, FormInput } from "../../styles/global";

export function NewAccount() {
  return (
    <AuthLayout
      title="Cadastro"
      subtitle="Crie sua conta e começe a gerenciar suas finanças."
    >
      <Form>
        <FormInput type="name" placeholder="Nome e sobrenome" />
        <FormInput type="email" placeholder="E-mail" />
        <FormInput type="password" placeholder="Senha" />
        <FormInput type="password" placeholder="Confirme a senha" />
        <button type="submit">Entrar</button>
      </Form>
    </AuthLayout>
  )
}