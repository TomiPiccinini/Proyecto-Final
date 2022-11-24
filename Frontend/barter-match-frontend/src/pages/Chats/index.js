import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Container,
  FirstColumn,
  SecondColumn,
  ContainerUsers,
  NoMessages,
  ContainerSend,
  ContainerMessage,
} from "./styled";
import NavBar from "../../components/NavBar";
import { USERS } from "./constants";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Chip from "@mui/material/Chip";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoading,
  selectMatchs,
  selectUserSelected,
} from "../../store/Chats/selectors";
import {
  getMatchs,
  setMessage,
  setSelectedUserStore,
} from "../../store/Chats/action";
import CircularIndeterminate from "../../components/Loading/index";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    color: "fff",
    backgroundColor: "fff",
  },
}));

const ChatBox = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const mail = JSON.parse(localStorage.getItem("mail"));

  const user = useSelector(selectUserSelected);

  const [mensaje, setMensaje] = useState("");

  const handleInputChange = (event) => {
    setMensaje(event.target.value);
  };

  const isSender = (message) => {
    if (mail == message.emailIssuing) return false;
    else return true;
  };

  const sendMessage = () => {
    if (mensaje != "") {
      const u = user;

      const message = {
        matchId: u.matchId,
        emailReceiver: u.otherMedia.userEmail,
        emailIssuing: mail,
        text: mensaje,
        dateTime: "",
      };
      dispatch(setMessage(message));
      user.mensajes.push(message);
      setMensaje("");
      dispatch(setSelectedUserStore(user));
    }
  };

  if (user.mensajes === []) {
    return (
      <SecondColumn noMessage={true}>
        <NoMessages>AÚN NO HAY MENSAJES.</NoMessages>
        <ContainerSend>
          <TextField
            className={classes.inputs}
            fullWidth
            id="mensaje"
            label="Escriba su mensaje"
            variant="standard"
            onChange={handleInputChange}
            sx={{ input: { color: "#fff" } }}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#9198e5" }}
            endIcon={<SendIcon />}
            onClick={() => sendMessage()}
          >
            Enviar
          </Button>
        </ContainerSend>
      </SecondColumn>
    );
  } else if (user.mensajes !== []) {
    return (
      <SecondColumn>
        {user.mensajes.map((message) => {
          return (
            <>
              <ContainerMessage sender={isSender(message)}>
                <Chip
                  className={classes.nombres}
                  label={message.text}
                  color="primary"
                  variant="filled"
                  sx={{ backgroundColor: "#9198e5", fontSize: "16px" }}
                />
                {/* <Messages key={message.text} sender={message.sender}>{message.text}</Messages> */}
              </ContainerMessage>
            </>
          );
        })}
        <ContainerSend>
          <TextField
            fullWidth
            id="mensaje"
            label="Escriba su mensaje"
            variant="standard"
            onChange={handleInputChange}
            className={classes.inputs}
            sx={{ input: { color: "#fff" } }}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "rgb(82 97 205)" }}
            endIcon={<SendIcon />}
            onClick={() => sendMessage()}
          >
            Enviar
          </Button>
        </ContainerSend>
      </SecondColumn>
    );
  }
};

const Chat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (user == null) {
      dispatch(getMatchs(mail));
    }
  }, []);

  //useEffect(() => {
  //}, []);

  const loading = useSelector(selectLoading);
  const user = useSelector(selectUserSelected);

  const mail = JSON.parse(localStorage.getItem("mail"));

  const matchs = useSelector(selectMatchs);

  if (loading) return <CircularIndeterminate />;
  return (
    <Wrapper>
      <NavBar />
      <Container>
        <FirstColumn>
          {matchs.map((u) => {
            return (
              <ContainerUsers key={u.emailOtherUser}>
                <Chip
                  label={u.emailOtherUser}
                  color="primary"
                  variant="filled"
                  onClick={() => {
                    dispatch(setSelectedUserStore(u));
                  }}
                  style={{
                    width: "100%",
                    margin: "15px 10px",
                    color: "#fff",
                    backgroundColor: "#9198e5",
                    fontSize: "20px",
                  }}
                />
                {/* <NameUsers onClick={() => setSelectedUser(u)}>{u.name} - {u.product}</NameUsers> */}
              </ContainerUsers>
            );
          })}
        </FirstColumn>
        {user ? (
          <ChatBox user={user} />
        ) : (
          <SecondColumn noMessage={true}>
            Seleccione un usuario para comenzar a chatear.
          </SecondColumn>
        )}
      </Container>
    </Wrapper>
  );
};

export default Chat;
