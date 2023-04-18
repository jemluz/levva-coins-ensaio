
import styled, { css } from "styled-components"

export const SummaryContainer = styled.section`
  grid-column: 2 / 3;

  width: 100%;
  max-width: 1120px;

  display: grid;
  grid-template-columns: 23rem 23rem 22rem;

  gap: 1rem;
  margin-top: -5rem;
`
interface SummaryCardProps {
  variant?: "balance"
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(p) => p.theme["gray-500"]};
  border-radius: 6px;
  padding: 2rem;
  box-shadow: 0px 0px 10px 5px #00000010;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem; 
  }

  ${(p => p.variant === "balance" && css`
    background: linear-gradient(to bottom,  ${p.theme["gray-500"]}, ${p.theme["gray-700"]});
    border-right: 2px solid ${(p) => p.theme["yellow-500"]};

    header {
      color: ${(p) => p.theme["yellow-500"]};
    }

    strong {
      color: ${(p) => p.theme["yellow-500"]};
    }
  `)}
`