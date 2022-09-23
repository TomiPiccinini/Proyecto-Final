import React, { useState } from 'react'
import { Wrapper, Container, FirstColumn, SecondColumn, ContainerUsers, NameUsers, Messages, NoMessages, ContainerSend } from './styled'
import NavBar from '../../components/NavBar'
import { USERS } from './constants'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const ChatBox = (props) => {
  console.log('user chat:', props.user.messages)
  if (!props.user.messages) {
    return(
      <SecondColumn noMessage={true}>
        <NoMessages>AÚN NO HAY MENSAJES.</NoMessages>
        <ContainerSend>
          <TextField fullWidth id="standard-basic" label="Escriba su mensaje" variant="standard" sx={{ input: { color: '#fff' } }}/>
          <Button variant="contained" sx={{backgroundColor:'#9198e5'}} endIcon={<SendIcon />}>
          Enviar
          </Button>
        </ContainerSend>
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
        <ContainerSend>
          <TextField fullWidth id="standard-basic" label="Escriba su mensaje" variant="standard" sx={{input: { color: '#fff' }}}/>
          <Button variant="contained" sx={{backgroundColor:'#9198e5'}} endIcon={<SendIcon />}>
          Enviar
          </Button>
        </ContainerSend>
      </SecondColumn>
    )
  }
}

const Chat = () => {
  const [user, setSelectedUser] = useState(null)

  return (
    <Wrapper>
      <NavBar />
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