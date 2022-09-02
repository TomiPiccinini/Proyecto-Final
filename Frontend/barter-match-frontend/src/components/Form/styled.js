import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 50px;
  padding: 10px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0px 10px 0px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: ${(props) => props.fontSize ? props.fontSize : '40px'};
  background-color: #a324;
  border-radius: 50px;
  margin-top: ${(props) => props.type==="submit" ? '40px' : '0px'};
  padding: 15px;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 8px 8px 8px #c9c9c9;
  opacity: 1;
  transition: all .4s;
  &:hover{
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`
