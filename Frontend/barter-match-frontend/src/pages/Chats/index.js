import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Container,
  FirstColumn,
  SecondColumn,
  ContainerUsers,
  NoMessages,
  ContainerSend,
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

const ChatBox = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const mail = JSON.parse(localStorage.getItem("mail"));

  const [mensaje, setMensaje] = useState("");
  console.log(mensaje);

  const handleInputChange = (event) => {
    setMensaje(event.target.value);
  };

  const sendMessage = () => {
    if (mensaje != "") {
      const u = props.user;
      const message = {
        //matchId: u.matchId,
        matchId: 4,
        emailReceiver: u.otherMedia.userEmail,
        emailIssuing: mail,
        text: mensaje,
        dateTime: "",
      };
      console.log(message);
      dispatch(setMessage(message));
      props.user.mensajes.push(message);
      setMensaje("");
    }
  };

  if (props.user.mensajes === []) {
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
  } else {
    return (
      <SecondColumn>
        {props.user.mensajes.map((message) => {
          return (
            <>
              <Chip
                className={classes.nombres}
                label={message.text}
                color="primary"
                variant="filled"
                sx={{ backgroundColor: "#9198e5", fontSize: "16px" }}
              />
              {/* <Messages key={message.text} sender={message.sender}>{message.text}</Messages> */}
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
    dispatch(getMatchs(mail));
  }, []);

  useEffect(() => {
    if (userSelected !== null) {
      setSelectedUser(userSelected);
    }
  }, [userSelected]);

  const loading = useSelector(selectLoading);
  const userSelected = useSelector(selectUserSelected);

  const [user, setSelectedUser] = useState(userSelected);

  const mail = JSON.parse(localStorage.getItem("mail"));

  const matchs = useSelector(selectMatchs);
  console.log("matchIndex", matchs);

  console.log("user", user);

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
                    setSelectedUser(u);
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
