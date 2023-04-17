import { AuthLayout } from "../../layouts/AuthLayout";
import { Form, FormInput } from "../../styles/global";

export function Login() {
  return (
    <AuthLayout
      title="Login"
      subtitle="Gerenciar suas entradas e saídas nunca foi tão simples."
    >
      <Form>
        <FormInput type="email" placeholder="E-mail" />
        <FormInput type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </Form>
    </AuthLayout>
  )
}