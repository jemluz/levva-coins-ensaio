import { ReactNode } from "react";
import CoinsLogo from '../../assets/logo.svg';
import { AuthBackground, AuthWrapper } from "./styles";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <AuthBackground>
      <AuthWrapper>
        <header>
          <img src={CoinsLogo} alt="Marca Levva Coins" />
        </header>

        <section>
          <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          {children}
        </section>
      </AuthWrapper>
    </AuthBackground>
  )
}