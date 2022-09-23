import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import Imagenperfil from '../../images/User-Profile.png'
import { Publicaciones } from './constants'
import DeleteIcon from '@mui/icons-material/DeleteRounded';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import {styles} from './perfilStyles.css'





const Perfil = () => {
  const [publicaciones,setPublicaciones] = useState(Publicaciones);


  function deletePublicacion(publicacion){
    setPublicaciones(publicaciones.filter(p => p.titulo !== publicacion)) 
   }

  
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
        {publicaciones.map((publicacion) => (
            <div style={{textAlign: 'center', marginBottom: '25px'}}>
              <div style={{ backgroundImage: 'url(' + publicacion.url + ')' }} className='carta'>
              
              </div>
              <DeleteIcon sx={{color: red['A700'], cursor: 'pointer'}} onClick={() => deletePublicacion(publicacion.titulo)}/>
              <h3 style={{fontFamily: 'Alatsi', margin: 0}}>{publicacion.titulo}</h3>
            </div>))}
        </div>
        
      </div>

    </div>

    </>
  )
}

export default Perfil