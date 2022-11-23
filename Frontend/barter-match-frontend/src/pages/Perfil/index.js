import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Imagenperfil from "../../images/User-Profile.png";
import { Publicaciones } from "./constants";
import DeleteIcon from "@mui/icons-material/DeleteRounded";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { Alert, Switch } from "@mui/material";
import DetailsCard from "../../components/DetailsCard";
// eslint-disable-next-line
import { styles } from "./perfilStyles.css";
import VanillaTilt from "vanilla-tilt";
import { Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectMail } from "../../store/Login/selectors";
import { getMatchs, getPublicaciones } from "../../store/Perfil/action";
import { selectPerfil } from "../../store/Perfil/selectors";

const Perfil = () => {
  const dispatch = useDispatch();

  const mail = JSON.parse(localStorage.getItem("mail"));

  const publisPerfil = useSelector(selectPerfil);
  const [publicaciones, setPublicaciones] = useState(publisPerfil);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [openDetails, setOpenDetails] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [titulo, setTitulo] = useState(false);

  useEffect(() => {
    dispatch(getPublicaciones(mail));
    dispatch(getMatchs(mail));
  }, []);

  useEffect(() => {
    if (publisPerfil.length !== 0) {
      setPublicaciones(publisPerfil);
    }
  }, [publisPerfil]);

  const deletePublicacion = (publicacion) => {
    setPublicaciones(publicaciones.filter((p) => p.title !== publicacion));
    setShowAlert(true);
  };

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".carta"), {
      glare: true,
      "max-glare": 1,
      max: 25,
      speed: 400,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showAlert]);

  const handleChange = () => {
    setTitulo(!titulo);
  };

  const handleOpenDetails = (name) => {
    setName(name);
    setOpenDetails(!openDetails);
  };

  const tituloRender = (titulo) => {
    if (titulo) {
      return (
        <>
          <div className="MisPublicaciones" style={{ marginTop: "50px" }}>
            <Typography variant="h4">Mis Publicaciones/Matchs</Typography>
            <Switch
              defaultUnchecked
              color="default"
              size="medium"
              onChange={handleChange}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="MisPublicaciones" style={{ marginTop: "50px" }}>
            <Typography variant="h4">Mis Publicaciones/Matchs</Typography>
            <Switch
              defaultUnchecked
              color="default"
              size="medium"
              onChange={handleChange}
            />
          </div>
          <div className="productos">
            {publicaciones.map((publicacion) => (
              <div style={{ textAlign: "center", marginBottom: "25px" }}>
                <div
                  style={{
                    backgroundImage: `url(${publicacion.photoList[0].url})`,
                  }}
                  className="carta"
                  onClick={() => handleOpenDetails(publicacion)}
                ></div>

                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <h3 style={{ fontFamily: "Alatsi", margin: 0 }}>
                    {publicacion.title}
                  </h3>
                  <DeleteIcon
                    sx={{ color: red["A700"], cursor: "pointer" }}
                    onClick={() => deletePublicacion(publicacion.title)}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
  };

  return (
    <Wrapper>
      <NavBar />
      <div className="Contenedor">
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <div className="DatosContenedor"></div>

        <div className="cardContenedor">
          <div className="data">
            <img
              className="ImgPerfil"
              src={Imagenperfil}
              alt="imagen de perfil"
            />
            <Typography variant="subtitle1" sx={{ fontSize: 30 }}>
              {mail}
            </Typography>
          </div>
          {tituloRender(titulo)}
          <DetailsCard
            show={openDetails}
            image={image}
            name={name}
            handleCloseDetails={() => {
              setOpenDetails(!openDetails);
            }}
          />
          {showAlert && (
            <Alert
              variant="filled"
              severity="success"
              onClose={() => {
                setShowAlert(false);
              }}
            >
              ¡Su producto se ha eliminado con éxito!
            </Alert>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Perfil;
