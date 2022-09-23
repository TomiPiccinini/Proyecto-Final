import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import Imagenperfil from '../../images/User-Profile.png'
import { Productos } from '../HomePubli/constants'
import DeleteIcon from '@mui/icons-material/DeleteRounded';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import {styles} from './perfilStyles.css'





const Perfil = () => {
  const [products,setProducts] = useState(Productos);


  function deleteProducto(producto){
    setProducts(products.filter(p => p.titulo !== producto)) 
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
        {products.map((producto) => (
            <div style={{textAlign: 'center'}}>
              <div style={{ backgroundImage: 'url(' + producto.url + ')' }} className='carta'>
              <DeleteIcon sx={{fontSize:30, color: red['A700'], cursor: 'pointer', marginTop:"170px"}} onClick={() => deleteProducto(producto.titulo)}/>
              </div>
              <h3 style={{fontFamily: 'Alatsi'}}>{producto.titulo}</h3>
            </div>))}
        </div>
        
      </div>

    </div>

    </>
  )
}

export default Perfil