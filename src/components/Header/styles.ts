import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-600"]};
  padding: 2.5rem 0 7.5rem;

  grid-column-start: 2;
  grid-column-end: 3;

  display: grid;
  grid-template-columns: 1fr 70rem 7rem 1fr;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;

  grid-column: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewCategoryButton = styled.button`
  height: 50px;
  background: ${(props) => props.theme["gray-500"]};
  border: 1px solid transparent;
  color: ${(props) => props.theme.white};
  font-weight: bold;

  border-radius: 6px;

  padding: 0 1.25rem;
  margin-right: 1rem;
  transition: all .3s;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["yellow-500"]};
    border: 1px solid ${(props) => props.theme["yellow-500"]};
  }
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme["yellow-300"]};
  color: ${(props) => props.theme["gray-600"]};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  transition: background-color .5s;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme["yellow-500"]};
  }
`;

export const UserAvatar = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 99px;
  border: 2px solid transparent;
  box-shadow: 0px 0px 10px 10px #00000010;
  transition: all .3s;

  grid-column: 4 / 5;
  align-items: flex-end;

  &:hover {
    border: 2px solid ${(props) => props.theme["yellow-500"]};
    box-shadow: 0px 0px 10px 20px #00000015;
    cursor: pointer;
  }
`;