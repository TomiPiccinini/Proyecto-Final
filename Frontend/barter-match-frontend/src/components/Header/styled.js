import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: row;
  z-index: 10;
  background-color: #808080;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

export const Button = styled.button`
  width: auto;
  //background-color: #a3d;
  cursor: pointer;
  padding: 10px;
  margin: 15px 5px 15px 5px;
  font-weight: bold;
`;

export const Logo = styled.img`
  width: 15%;
  height: 75px;
`
