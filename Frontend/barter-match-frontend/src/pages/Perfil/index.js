import React from 'react'
import NavBar from '../../components/NavBar'
import Imagenperfil from '../../images/User-Profile.png'
import { Productos } from '../HomePubli/constants'
import DeleteIcon from '@mui/icons-material/DeleteRounded';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import {styles} from './perfilStyles.css'


const Perfil = () => {
  return (
    <>
    <NavBar />
    <div className='Contenedor'>
    <link href='https://fonts.googleapis.com/css?family=Roboto&display=swap' rel='stylesheet' />
      <div className='DatosContenedor'>
        <div className='data'>
            <Typography variant="h4">Lucas</Typography>
            <img className='ImgPerfil' src={Imagenperfil} alt="imagen de perfil"/>
            <Typography variant="subtitle1" sx={{fontSize:30}}>perris@gmail.com</Typography>
        </div>
      </div>

      <div className='cardContenedor'>
        <Typography variant="h4">Mis Publicaciones</Typography>
        <div className="productos">
        {Productos.map((producto) => (
          <div style={{ backgroundImage: 'url(' + producto.url + ')' }} className='carta'>
            <h3>{producto.name}</h3>
          </div>))}
        </div>
        <DeleteIcon sx={{fontSize:50, color: red['A700']}}/>
      </div>

    </div>

    </>
  )
}

export default Perfil