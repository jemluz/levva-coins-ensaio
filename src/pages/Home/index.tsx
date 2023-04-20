import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { HomeWrapper, PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Summary />
      <SearchForm />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>

            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight>R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Hambúrguer</td>
              <td>
                <PriceHighlight>- R$ 59,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>

          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </HomeWrapper>
  )
}