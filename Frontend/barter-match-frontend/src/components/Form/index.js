import React, { useState, useEffect } from "react";
import { Box, TextField, MenuItem, Button, Alert } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { postPubli } from "../../store/HomePubli/action";
import { useDispatch } from "react-redux";

const Formulario = () => {
  const dispatch = useDispatch();
  const [datos, setDatos] = useState({
    titulo: "",
    marca: "",
    color: "",
    description: "",
    imagen: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [condition, setCondition] = useState("");
  const [talle, setTalle] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [showAlert]);

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.id]: event.target.value,
    });
  };

  const handleChangeCondition = (event) => {
    setCondition(event.target.value);
  };

  const handleChangeTalle = (event) => {
    setTalle(event.target.value);
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const enviarDatos = (event) => {
    console.log(datos);
    datos["state"] = condition;
    datos["measure"] = talle;
    datos["tag"] = category;
    console.log(datos);
    dispatch(postPubli(datos));
    setShowAlert(true);
  };

  // const adjuntarImagen = () => {

  // }

  const categories = [
    {
      value: "calzado",
      label: "Calzado",
    },
    {
      value: "pantalon",
      label: "Pantalón",
    },
    {
      value: "remera",
      label: "Remera",
    },
    {
      value: "campera",
      label: "Campera",
    },
    {
      value: "buzo",
      label: "Buzo",
    },
    {
      value: "gorra",
      label: "Gorra",
    },
    {
      value: "accesorio",
      label: "Accesorio",
    },
  ];

  const talles = [
    {
      value: "xs",
      label: "XS",
    },
    {
      value: "s",
      label: "S",
    },
    {
      value: "m",
      label: "M",
    },
    {
      value: "l",
      label: "L",
    },
    {
      value: "xl",
      label: "XL",
    },
    {
      value: "xxl",
      label: "XXL",
    },
  ];

  const conditions = [
    {
      value: "new",
      label: "Nuevo",
    },
    {
      value: "used",
      label: "Usado",
    },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiFilledInput-root": {
        backgroundColor: "rgb(232, 241, 250)",
      },
      "& .MuiFilledInput-root:hover": {
        backgroundColor: "rgb(250, 232, 241)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "rgb(232, 241, 250)",
        },
      },
      "& .MuiFilledInput-root.Mui-focused": {
        backgroundColor: "rgb(250, 241, 232)",
      },
    },
  }));

  const classes = useStyles();
  return (
    <Box
      component="form"
      sx={{
        padding: "20px",
        borderRadius: "20px",
        backgroundColor: "linear-gradient(#e66465, #9198e5)",
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        textAlign: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ color: "#ffffff" }}>
        <div>
          <TextField
            className={classes.root}
            required
            id="titulo"
            label="Titulo"
            variant="filled"
            onChange={handleInputChange}
          />
          <TextField
            className={classes.root}
            id="category"
            select
            label="Categoría"
            value={category}
            onChange={handleChange}
            helperText="Seleccione la categoría"
            variant="filled"
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            className={classes.root}
            id="marca"
            label="Marca"
            variant="filled"
            onChange={handleInputChange}
          />
          <TextField
            className={classes.root}
            required
            id="condition"
            select
            label="Condición"
            value={condition}
            onChange={handleChangeCondition}
            helperText="Seleccione la condición"
            variant="filled"
          >
            {conditions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            className={classes.root}
            required
            id="color"
            label="Color"
            type="text"
            variant="filled"
            onChange={handleInputChange}
          />
          <TextField
            className={classes.root}
            select
            id="talle"
            label="Talle"
            type="text"
            variant="filled"
            onChange={handleChangeTalle}
          >
            {talles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            className={classes.root}
            fullWidth
            id="description"
            label="Descripción"
            helperText="Descripción del artículo y su estado"
            variant="filled"
            onChange={handleInputChange}
          />
          <TextField
            className={classes.root}
            fullWidth
            id="imagen"
            label="URL Imagen"
            helperText="Ingrese URL de la imagen"
            variant="filled"
            onChange={handleInputChange}
          />
        </div>
        <Button
          variant="contained"
          style={{
            fontWeight: "bold",
            backgroundColor: "rgb(82 97 205)",
            marginBottom: "10px",
          }}
          onClick={() => enviarDatos()}
        >
          Publicar
        </Button>
        {showAlert && (
          <Alert
            variant="filled"
            severity="success"
            onClose={() => {
              setShowAlert(false);
            }}
          >
            ¡Su producto se ha registrado con éxito!
          </Alert>
        )}
      </div>
    </Box>
  );
};

export default Formulario;
