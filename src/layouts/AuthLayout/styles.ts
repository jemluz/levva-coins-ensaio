import styled from "styled-components";
import background from '../../assets/bg.png'

export const AuthBackground = styled.div`
  background-image: ${`url(${background})`};
  background-size: cover;
  background-position: right;

  height: 100vh;
`;

export const AuthWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 30rem;
  height: 100vh;

  padding: 0 1rem;
  margin: 0 auto;
`;
