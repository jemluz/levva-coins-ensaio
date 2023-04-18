
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

`