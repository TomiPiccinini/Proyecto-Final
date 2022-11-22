import React, { useState } from 'react'
import { Wrapper, Container, FirstColumn, SecondColumn, ContainerUsers, NameUsers, Messages, NoMessages, ContainerSend } from './styled'
import NavBar from '../../components/NavBar'
import { USERS } from './constants'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Chip from '@mui/material/Chip';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
}));

const ChatBox = (props) => {
  const classes = useStyles();
  console.log('user chat:', props.user.messages)
  if (!props.user.messages) {
    return(
      <SecondColumn noMessage={true}>
        <NoMessages>AÚN NO HAY MENSAJES.</NoMessages>
        <ContainerSend>
          <TextField fullWidth id="standard-basic" label="Escriba su mensaje" variant="standard" sx={{ input: { color: '#fff' }}}/>
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
            <>
            <Chip label={message.text} color="primary" variant="filled" sx={{display: "${(message) => message.sender ? 'flex' : 'flex'}"}} />
            {/* <Messages key={message.text} sender={message.sender}>{message.text}</Messages> */}
            </>  
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
                  <Chip label={u.name} color="primary" variant="filled" onClick={() => setSelectedUser(u)} 
                  style={{width:"80%" , margin:"10px", color:"#fff", backgroundColor:"#9198e5"}}/>
                 {/* <NameUsers onClick={() => setSelectedUser(u)}>{u.name} - {u.product}</NameUsers> */}
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