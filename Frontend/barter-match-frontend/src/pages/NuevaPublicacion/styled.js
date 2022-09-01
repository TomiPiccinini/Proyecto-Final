import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80%;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 5px 0px;
`

export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 40px;
  padding: 15px;
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 40px;
  background-color: #a324;
  border-radius: 50px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  box-shadow: 8px 8px 8px #c9c9c9;
  opacity: 1;
  transition: all .4s;
  &:hover{
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`
