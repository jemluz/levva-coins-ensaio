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
export const NewCategoryButton = styled.button`
`;
export const NewTransactionButton = styled.button`
`;
export const UserAvatar = styled.img`
`;