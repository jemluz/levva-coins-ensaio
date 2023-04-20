import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 77rem 1fr;
`;

export const TransactionsContainer = styled.main`
  grid-column: 2 / 3;

  width: 100%;
  max-width: 1120px;
  margin-top: 1rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(p) => p.theme["gray-500"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  variant: "income" | "outcome"
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(p) => p.variant === 'income' ? p.theme["green-300"] : p.theme["red-300"]};
`