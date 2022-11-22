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
import { useDispatch, useSelector } from "react-redux";
import { getPublicaciones } from "../../store/HomePubli/action";
import { selectPublicaciones } from "../../store/HomePubli/selectors";
import { selectMail } from "../../store/Login/selectors";

const HomePublicaciones = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPublicaciones());
  }, []);

  const index = () => {
    if (!publis) return 0;
    else return publis.length - 1;
  };

  const [currentIndex, setCurrentIndex] = useState(index);
  const [open, setOpen] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const currentIndexRef = useRef(currentIndex);

  const publis = useSelector(selectPublicaciones);
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

  const childRefs = useMemo(
    () =>
      Array(publis.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < publis.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    if (nameToDelete === "Chaleco" && direction === "right") {
      handleOpen();
    }

    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < publis.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpenDetails = (name) => {
    setName(name);
    setOpenDetails(!openDetails);
  };

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
              <HomeCard
                ref={childRefs[index]}
                className="swipe"
                key={producto.titulo}
                onSwipe={(dir) => swiped(dir, producto.title, index)}
                onCardLeftScreen={() => outOfFrame(producto.title, index)}
              >
                <div
                  onDoubleClick={() => handleOpenDetails(producto)}
                  style={{
                    backgroundImage: `url(${producto.photoList[0].url})`,
                  }}
                  className="card"
                >
                  <h3>{producto.title}</h3>
                </div>
              </HomeCard>
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
        >
          <div>
            <img
              src="https://i.ibb.co/Jp8YJYD/Like-icon-on-transparent-PNG.png"
              className="button"
              alt="dislike"
              border="0"
              style={{ width: "100px", rotate: "180deg" }}
              onClick={() => swipe("left")}
            />

            {/* <img src="https://i.ibb.co/5YFjNZS/reload.png" alt="reload" className='button' border="0" style={{width:"100px"}} onClick={() => goBack()}/> */}

            <img
              src="https://i.ibb.co/Jp8YJYD/Like-icon-on-transparent-PNG.png"
              alt="Like-icon-on-transparent-PNG"
              className="button"
              border="0"
              style={{ width: "100px" }}
              onClick={() => swipe("right")}
            />
          </div>
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
