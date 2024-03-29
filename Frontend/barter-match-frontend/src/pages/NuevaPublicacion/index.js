import React from "react";
import NavBar from "../../components/NavBar";
import { Container, Wrapper } from "./styled";
import Formulario from "../../components/Form";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { selectMail } from "../../store/Login/selectors";
import { selectLoading } from "../../store/HomePubli/selectors";
import CircularIndeterminate from "../../components/Loading";

const NuevaPublicacion = () => {
  const mail = useSelector(selectMail);
  const loading = useSelector(selectLoading);

  if (loading) return <CircularIndeterminate />;
  return (
    <Wrapper>
      <NavBar />
      <Container>
        <Typography variant="h4" fontWeight="bold" style={{ margin: "10px" }}>
          Nueva publicación
        </Typography>
        <Formulario />
      </Container>
    </Wrapper>
  );
};

export default NuevaPublicacion;
