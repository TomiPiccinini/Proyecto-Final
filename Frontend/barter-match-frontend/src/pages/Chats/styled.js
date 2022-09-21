import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  padding-top: 3%;
  width: 100%;
  height: 90%;
  display: flex;
  color: #FFFFFF;
  border-radius: 20px;
`

export const FirstColumn = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
`

export const SecondColumn = styled.div`
  width: 80%;
  height: 100%;
  padding: 10px 0px 10px 0px;
  margin-top: 10px;
  border: 1px solid #FFFFFF;
  font-size: 24px;
  text-align: ${(props) => props.noMessage ? 'center': 'none'};
  justify-content: ${(props) => props.noMessage ? 'center': 'none'};
  align-items: ${(props) => props.noMessage ? 'center': 'none'};
`

export const ContainerUsers = styled.div`
  width: 100%;
  cursor: pointer;
`

export const NameUsers = styled.div`
  width: 90%;
  font-size: 24px;
  border: 1px solid;
  padding: 5px;
  margin: 10px;
`

export const Messages = styled.div`
  width: 98%;
  font-size: 24px;
  border: 1px solid;
  padding: 5px;
  margin: 10px;
  text-align: ${(props) => props.sender ? 'none': 'right'};
`

export const NoMessages = styled.div`
  width: 98%;
  font-size: 24px;
  padding: 5px;
  margin: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
`