import React, { useState, useMemo, useRef, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { Container, Wrapper } from "./styled";
import HomeCard from "../../components/HomeCard";
import { Button } from "@mui/material";
// eslint-disable-next-line
import { styles } from "./styles.css";
import Dialog from "../../components/Dialog";
import { Productos } from "./constants";
import history from "../../utils/history";
import DetailsCard from "../../components/DetailsCard";
import Tooltip from "@mui/material/Tooltip";
import VanillaTilt from "vanilla-tilt";
import { CardSwiper } from "react-card-rotate-swiper";
import { useDispatch, useSelector } from "react-redux";
import { getPublicaciones } from "../../store/HomePubli/action";
import { selectPublicaciones } from "../../store/HomePubli/selectors";
import { selectMail } from "../../store/Login/selectors";

const HomePublicaciones = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPublicaciones());
  }, []);

  const publis = useSelector(selectPublicaciones);
  const [open, setOpen] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const mail = useSelector(selectMail);

  console.log(publis);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      glare: true,
      "max-glare": 1,
      max: 25,
      speed: 400,
    });
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpenDetails = (name) => {
    setName(name);
    setOpenDetails(!openDetails);
  };

  const handleSwipe = (d) => {
    (d == "left") ? console.log('hola') : console.log("chau")
  }
  return (
    <Wrapper>
      <NavBar />
      <Container>
        <link
          href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
          rel="stylesheet"
        />
        <Tooltip
          title="Haga doble click para ver detalles del producto"
          placement="top"
        >
          <div className="cardContainer">
            {publis.map((producto, index) => (
              <CardSwiper
                onSwipe={handleSwipe}
                className={"swiper"}

                contents={
                  <>
                    <div
                      onDoubleClick={() => handleOpenDetails(producto)}
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
              />))
            }
          </div>
        </Tooltip>
        <div
          className="buttons"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
        
        </div>
        <DetailsCard
          show={openDetails}
          image={image}
          name={name}
          handleCloseDetails={() => {
            setOpenDetails(!openDetails);
          }}
        />
        <Dialog
          name={open}
          handleClose={() => {
            setOpen(!open);
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
