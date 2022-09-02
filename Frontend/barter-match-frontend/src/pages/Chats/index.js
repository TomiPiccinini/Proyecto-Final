import React, { useState } from 'react'
import { Wrapper, Container, FirstColumn, SecondColumn, ContainerUsers, NameUsers, Messages, NoMessages } from './styled'
import Header from '../../components/Header'
import { USERS } from './constants'

const ChatBox = (props) => {
  console.log('user chat:', props.user.messages)
  if (!props.user.messages) {
    return(
      <SecondColumn noMessage={true}>
        <NoMessages>AÚN NO HAY MENSAJES.</NoMessages>
      </SecondColumn>
    )
  }
  else {
    return(
      <SecondColumn>
        {props.user.messages.map((message) => {
          return(
            <Messages key={message.text} sender={message.sender}>{message.text}</Messages>
          )
        })}
      </SecondColumn>
    )
  }
}

const Chat = () => {
  const [user, setSelectedUser] = useState(null)

  return (
    <Wrapper>
      <Header />
      <Container>
        <FirstColumn>
          {
            USERS.map((u)=> {
              return(
                <ContainerUsers key={u.name} >
                  <NameUsers onClick={() => setSelectedUser(u)}>{u.name} - {u.product}</NameUsers>
                </ContainerUsers>
              )
            })
          }
        </FirstColumn>
        {user ? <ChatBox user={user}/> : (<SecondColumn noMessage={true}>Seleccione un usuario para comenzar a chatear.</SecondColumn>)}
      </Container>
    </Wrapper>
  )
}

export default Chat