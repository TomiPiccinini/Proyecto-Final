import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Imagenperfil from "../../images/User-Profile.png";
import { Publicaciones } from "./constants";
import DeleteIcon from "@mui/icons-material/DeleteRounded";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { Alert, Switch } from "@mui/material";
import DetailsCard from "../../components/DetailsCard";
import MatchCard from "../../components/MatchCard";
// eslint-disable-next-line
import { styles } from "./perfilStyles.css";
import VanillaTilt from "vanilla-tilt";
import { Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectMail } from "../../store/Login/selectors";
import {
  acceptMatchs,
  deletePubli,
  getMatchs,
  getPublicaciones,
} from "../../store/Perfil/action";
import {
  selectLoading,
  selectMatchs,
  selectPerfil,
} from "../../store/Perfil/selectors";
import CircularIndeterminate from "../../components/Loading";

const Perfil = () => {
  const dispatch = useDispatch();

  const mail = JSON.parse(localStorage.getItem("mail"));

  const loading = useSelector(selectLoading);
  const publisPerfil = useSelector(selectPerfil);
  const matchs = useSelector(selectMatchs);
  const [publicaciones, setPublicaciones] = useState(publisPerfil);
  const [name, setName] = useState("");
  const [match, setMatch] = useState("");
  const [image, setImage] = useState("");
  const [checked, setChecked] = useState(false);
  const [openMatch, setOpenMatch] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    dispatch(getPublicaciones(mail));
    dispatch(getMatchs(mail));
  }, []);

  useEffect(() => {
    if (publisPerfil.length !== 0) {
      setPublicaciones(publisPerfil);
    }
  }, [publisPerfil]);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".carta"), {
      glare: true,
      "max-glare": 1,
      max: 25,
      speed: 400,
    });
  });

  const deletePublicacion = (publicacion, mediaId) => {
    setPublicaciones(publicaciones.filter((p) => p.title !== publicacion));
    setShowAlert(true);
    dispatch(deletePubli(mediaId));
  };

  const deleteMatch = (idMatch) => {
    const closeMatch = {
      matchId: idMatch,
      reason: "Cancelado",
    };
    console.log(closeMatch);
    dispatch(acceptMatchs(closeMatch));
  };

  const confirmMatch = (idMatch) => {
    const closeMatch = {
      matchId: idMatch,
      reason: "Confirmado",
    };
    console.log(closeMatch);
    dispatch(acceptMatchs(closeMatch));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showAlert]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleOpenDetails = (name) => {
    setName(name);
    setOpenDetails(!openDetails);
  };

  const handleOpenMatch = (match) => {
    setMatch(match);
    setOpenMatch(!openMatch);
  };

  const tituloRender = () => {
    if (checked) {
      return (
        <>
          <div className="productos">
            {matchs.map((match) => (
              <div style={{ textAlign: "center", marginBottom: "25px" }}>
                <div
                  style={{
                    backgroundImage: `url(${match.otherMedia.photoList[0].url})`,
                  }}
                  className="carta"
                  onClick={() => handleOpenMatch(match)}
                ></div>
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <h3 style={{ fontFamily: "Alatsi", margin: 0 }}>
                    {match.otherMedia.title}
                  </h3>
                  <TaskAltIcon
                    sx={{ color: "green", cursor: "pointer" }}
                    onClick={() => confirmMatch(match.matchId)}
                  />
                  <DeleteIcon
                    sx={{ color: red["A700"], cursor: "pointer" }}
                    onClick={() => deleteMatch(match.matchId)}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      );
    } else {
      return (
        <>
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
                    onClick={() =>
                      deletePublicacion(publicacion.title, publicacion.mediaId)
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
  };

  if (loading) return <CircularIndeterminate />;
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
          <div className="MisPublicaciones" style={{ marginTop: "50px" }}>
            <Typography variant="h4">
              Mis Publicaciones{" "}
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                color="default"
                size="medium"
              />
              Matchs
            </Typography>
          </div>
          {tituloRender()}

          <DetailsCard
            show={openDetails}
            image={image}
            name={name}
            handleCloseDetails={() => {
              setOpenDetails(!openDetails);
            }}
          />
          <MatchCard
            show={openMatch}
            match={match}
            handleCloseMatchs={() => {
              setOpenMatch(!openMatch);
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
