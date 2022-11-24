import React, { useState, useMemo, useRef, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { Container, Wrapper } from "./styled";
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@mui/material";
// eslint-disable-next-line
import { styles } from "./styles.css";
import Dialog from "../../components/Dialog";
import history from "../../utils/history";
import DetailsCard from "../../components/DetailsCard";
import Tooltip from "@mui/material/Tooltip";
import VanillaTilt from "vanilla-tilt";
import { CardSwiper } from "react-card-rotate-swiper";
import { useDispatch, useSelector } from "react-redux";
import {
  closeLike,
  getPublicaciones,
  postLike,
} from "../../store/HomePubli/action";
import {
  selectImageMatch,
  selectLoading,
  selectPublicaciones,
  selectShowMatch,
} from "../../store/HomePubli/selectors";
import CircularIndeterminate from "../../components/Loading";

const HomePublicaciones = () => {
  const dispatch = useDispatch();

  const mail = JSON.parse(localStorage.getItem("mail"));

  useEffect(() => {
    dispatch(getPublicaciones(mail));
  }, []);

  const loading = useSelector(selectLoading);
  const publis = useSelector(selectPublicaciones);
  const showMatch = useSelector(selectShowMatch);
  const imageMatch = useSelector(selectImageMatch);
  const [open, setOpen] = useState(showMatch);
  const [openDetails, setOpenDetails] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      glare: true,
      "max-glare": 1,
      max: 25,
      speed: 400,
    });
  });

  useEffect(() => {
    setOpen(showMatch);
  }, []);

  console.log("showMatch: ", showMatch);
  console.log("open: ", open);
  console.log("ImagenMatch", imageMatch);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpenDetails = (name) => {
    setName(name);
    setOpenDetails(!openDetails);
  };

  const sendLike = (producto) => {
    console.log("dentro sendlike", producto);
    const mediaId = producto.mediaId;
    const emailReceiver = producto.userEmail;
    const imageMyProduct = producto.yourMedia.photoList[0].url;
    setImage(imageMyProduct);
    dispatch(postLike(mail, mediaId, emailReceiver));
  };

  const handleSwipe = (d, producto) => {
    
    d == "right" ? sendLike(producto) : console.log(d);
  };

  if (loading) return <CircularIndeterminate />;
  return (
    <Wrapper>
      <NavBar />
      <Container>
        <link
          href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
          rel="stylesheet"
        />
        <Tooltip title="Ver detalles del producto" placement="top">
          <div className="cardContainer">
            {publis.map((producto, index) => (
              <>
                <CardSwiper
                  onSwipe={(d) => handleSwipe(d, producto)}
                  className={"swiper"}
                  contents={
                    <>
                      <div
                        style={{
                          backgroundImage: `url(${producto.photoList[0].url})`,
                          //backgroundImage: 'url(' + producto.url + ')',
                        }}
                        className="card"
                      >
                        <h3>{producto.title}</h3>
                      </div>
                    </>
                  }
                />
                <InfoIcon
                  sx={{
                    position: "absolute",
                    top: "70px",
                    marginLeft: "-10px",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                  onClick={() => handleOpenDetails(producto)}
                />
              </>
            ))}
          </div>
        </Tooltip>
        <div
          className="buttons"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        ></div>
        <DetailsCard
          show={openDetails}
          name={name}
          handleCloseDetails={() => {
            setOpenDetails(!openDetails);
          }}
        />
        <Dialog
          name={showMatch}
          imageOtherProduct={imageMatch}
          imageMyProduct={image}
          handleClose={() => {
            dispatch(closeLike());
          }}
        />

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            variant="contained"
            style={{
              fontWeight: "bold",
              backgroundColor: "rgb(82 97 205)",
              fontSize: "11px",
            }}
            className="button"
            onClick={() => history.push("new")}
          >
            Nueva publicacion
          </Button>
        </div>
      </Container>
    </Wrapper>
  );
};

export default HomePublicaciones;
