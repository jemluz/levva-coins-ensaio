import styled from "styled-components";
import background from '../../assets/bg.png'

export const AuthBackground = styled.div`
  background-image: ${`url(${background})`};
  background-size: cover;
  background-position: right;

  height: 100vh;
`;