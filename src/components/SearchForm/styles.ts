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

  button {
    grid-column: 3 / 4;

    display: flex;
    align-items: center;

    gap: 0.75rem;
    padding: 1rem;

    background: transparent;
    border: 1px solid ${props => props.theme["yellow-300"]};
    color: ${props => props.theme["yellow-300"]};
    border-radius: 6px;

    font-weight: bold;
    transition: all .3s;

    &:hover {
      background: ${props => props.theme["yellow-500"]};
      border-color: ${props => props.theme["yellow-500"]};
      color: ${props => props.theme["gray-600"]};
      transition: all .2s;
      cursor: pointer;
    }
  }
`;