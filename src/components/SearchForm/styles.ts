import styled from "styled-components";

export const SearchFormContainer = styled.form`
  grid-column: 2 / 3;
  margin-top: 3rem;

  max-width: 70rem;
  display: grid;
  grid-template-columns: 1fr 1.5rem auto;

  input {
    grid-column: 1 / 2;
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${props => props.theme["gray-700"]};
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme["gray-500"]};
    }
  }

  
`;