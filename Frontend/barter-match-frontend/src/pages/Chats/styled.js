import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image:url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
  background-size:cover;
  height: 100vh;
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
  background-color:(185,185,185,0.5);
`

export const SecondColumn = styled.div`
  width: 80%;
  height: 100%;
  padding: 10px 0px 10px 0px;
  border-left: 1px solid #FFFFFF;
  font-size: 24px;
  text-align: ${(props) => props.noMessage ? 'center': 'none'};
  justify-content: ${(props) => props.noMessage ? 'center': 'none'};
  align-items: ${(props) => props.noMessage ? 'center': 'none'};
  
`

export const ContainerUsers = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  justifyContent: center;
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

export const Input = styled.input`
  width: 98%;
  font-size: 24px;
  padding: 5px;
  margin: 10px;
`

export const ContainerSend = styled.div`
  width: 95%;
  font-size: 24px;
  padding: 5px;
  margin: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  
  display: flex;
  color: #fff;
  
`