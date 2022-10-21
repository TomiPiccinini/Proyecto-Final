import React, { useState } from "react";
import { Container, Wrapper } from "./styled";
import { Box, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import history from "../../utils/history";
import { loginstyles } from "./loginstyles.css";
import { setMail } from "../../store/Login/action";
import { useDispatch } from "react-redux";

const Login = () => {

  const dispatch = useDispatch()

  const [mail, setUserMail] = useState('')

  const saveMail = (mail) => {
    history.push("home");
    dispatch(setMail(mail));
  };

  const handleInputChange = (event) => {
    setUserMail(event.target.value)
  };

  return (
    <Wrapper>
      <Container>
        <Box
          component="form"
          sx={{
            height: "500px",
            width: "500px",
            padding: "20px",
            borderRadius: "20px",
            backgroundColor: "white",
            "& .MuiTextField-root": { m: 1 },
            textAlign: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            style={{ margin: "10px", color: "black" }}
          >
            Iniciar sesión
          </Typography>
          <div
            style={{
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <TextField
              required
              id="usuario"
              label="Usuario"
              variant="filled"
              onChange={handleInputChange}
            />
            <TextField
              required
              id="password"
              label="Contraseña"
              variant="filled"
              type="password"
              onChange={handleInputChange}
            />
            <Button
              style={{
                marginLeft: "10px",
                marginTop: "25px",
                backgroundColor: "#9198e5",
              }}
              variant="contained"
              component="label"
              onClick={() => saveMail(mail)}
            >
              Enviar
            </Button>
            <a href="#">
              <Typography
                fontWeight="bold"
                style={{ margin: "10px", color: "light-blue" }}
              >
                ¿Olvidaste tu contraseña?
              </Typography>
            </a>
          </div>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Login;
