import { Header } from "../../components/Header";
import { Summary } from "../../components/Sumarry/indesx";
import { SearchForm } from "../components/SearchForm";
import {
  PriceHighLight,
  TransactionContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2024</td>
            </tr>
            <tr>
              <td width="50%">Ifood</td>
              <td>
                <PriceHighLight variant="outcome">- 59,00</PriceHighLight>
              </td>
              <td>Compra</td>
              <td>1/10/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  );
}
