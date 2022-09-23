import React, {useState} from 'react';
import { Box, TextField, MenuItem, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const Formulario = () => {
    const [datos, setDatos] = useState({
        titulo: '',
        tipo: '',
        category: '',
        marca: '',
        condition: '',
        color: '',
        descripcion: ''
    })

    const handleInputChange = (event) => {
         console.log(event.target.id)
         console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        console.log('enviando datos...' + datos.titulo + datos.tipo + datos.category + datos.marca + datos.condition + datos.color + datos.descripcion)
    }

    // const adjuntarImagen = () => {

    // }

    const categories = [
        {
          value: 'calzado',
          label: 'Calzado',
        },
        {
          value: 'pantalon',
          label: 'Pantalón',
        },
        {
          value: 'remera',
          label: 'Remera',
        },
        {
          value: 'campera',
          label: 'Campera',
        },
        {
            value: 'buzo',
            label: 'Buzo',
        },
        {
            value: 'gorra',
            label: 'Gorra',
        },
        {
            value: 'accesorio',
            label: 'Accesorio',
        },
    ];

    const conditions = [
        {
          value: 'new',
          label: 'Nuevo',
        },
        {
          value: 'used',
          label: 'Usado',
        },
    ];

    const [condition, setCondition] = React.useState('');

    const handleChangeCondition = (event) => {
        setCondition(event.target.value);
    };

    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    

    const useStyles = makeStyles((theme) => ({
        root: {
            "& .MuiFilledInput-root": {
              backgroundColor: "rgb(232, 241, 250)"
            },
            "& .MuiFilledInput-root:hover": {
              backgroundColor: "rgb(250, 232, 241)",
              // Reset on touch devices, it doesn't add specificity
              "@media (hover: none)": {
                backgroundColor: "rgb(232, 241, 250)"
              }
            },
            "& .MuiFilledInput-root.Mui-focused": {
              backgroundColor: "rgb(250, 241, 232)"
            }
          }


    }));

    const classes = useStyles();
    return (
        
        <Box
            component="form"
            sx={{
                padding: '20px',
                borderRadius: '20px',
                backgroundColor: 'linear-gradient(#e66465, #9198e5)',
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                textAlign: 'center',
            }}
            noValidate
            autoComplete="off"
        >
            <div style={{color: '#ffffff'}}>
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
                    id="talle"
                    label="Talle"
                    type="text"
                    variant="filled"
                    onChange={handleInputChange}
                    />
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <TextField
                    className={classes.root}
                    fullWidth
                    id="descripcion"
                    label="Descripción"
                    helperText="Descripción del artículo y su estado"
                    variant="filled"
                    onChange={handleInputChange}
                    />
                    <Button style={{marginLeft: 'auto'}} variant="contained" component="label">
                            Subir imágen
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </div>
                <Button variant="contained" style={{fontWeight: 'bold', backgroundColor:'#9198e5'}} onClick={() => enviarDatos()}>Publicar</Button>
            </div>
        </Box>
        );
}
 
export default Formulario;