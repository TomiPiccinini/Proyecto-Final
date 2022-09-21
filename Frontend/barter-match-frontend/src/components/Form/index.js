import React, {useState} from 'react';
import { Input, InputContainer } from './styled';
import { Box, TextField, MenuItem, Button } from '@mui/material';

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

    const adjuntarImagen = () => {

    }

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

    return (
        <Box
            component="form"
            sx={{
                padding: '20px',
                borderRadius: '20px',
                backgroundColor: 'white',
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                textAlign: 'center',
            }}
            noValidate
            autoComplete="off"
        >
            <div style={{color: '#ffffff'}}>
                <div>
                    <TextField
                    required
                    id="titulo"
                    label="Titulo"
                    variant="filled"
                    onChange={handleInputChange}
                    />
                    <TextField
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
                    id="marca"
                    label="Marca"
                    variant="filled"
                    onChange={handleInputChange}
                    />
                    <TextField
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
                    required
                    id="color"
                    label="Color"
                    type="text"
                    variant="filled"
                    onChange={handleInputChange}
                    />
                    <TextField
                    id="talle"
                    label="Talle"
                    type="text"
                    variant="filled"
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <TextField
                    fullWidth
                    id="descripcion"
                    label="Descripción"
                    helperText="Descripción del artículo y su estado"
                    variant="filled"
                    onChange={handleInputChange}
                    />
                </div>
                <Button variant="contained" style={{fontWeight: 'bold'}} onClick={() => enviarDatos()}>Publicar</Button>
            </div>
        </Box>
        );
}
 
export default Formulario;