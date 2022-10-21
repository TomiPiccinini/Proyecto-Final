import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import Imagenperfil from '../../images/User-Profile.png'
import { Publicaciones } from './constants'
import DeleteIcon from '@mui/icons-material/DeleteRounded';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';
import DetailsCard from "../../components/DetailsCard"
// eslint-disable-next-line
import { styles } from './perfilStyles.css' 
import  VanillaTilt from 'vanilla-tilt'
import { Wrapper } from './styled'
import { useDispatch, useSelector } from 'react-redux';
import { getPublicaciones } from '../../store/HomePubli/action';
import { selectMail } from '../../store/Login/selectors';




const Perfil = () => {
  const dispatch = useDispatch();
  const [publicaciones,setPublicaciones] = useState(Publicaciones);
  const [name,setName] = useState('')
  const [image,setImage] = useState('')
  const [openDetails,setOpenDetails] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const mail = useSelector(selectMail)

  const deletePublicacion = (publicacion) => {
    setPublicaciones(publicaciones.filter(p => p.titulo !== publicacion))
    setShowAlert(true)
   }

   useEffect(() => {
    dispatch(getPublicaciones())
  }, []);

   useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".carta"), {
      glare:true,
      "max-glare":1,
      max: 25,
      speed: 400
      })
  }, []);

   useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false)
    }, 3000);
    return () => clearTimeout(timer);
  }, [showAlert]);

 


  const handleOpenDetails = (name)=>{
    setName(name)
    setOpenDetails(!openDetails)
  }
  
  return (
    <Wrapper>
    
    <NavBar />
    <div className='Contenedor'>
    <link href='https://fonts.googleapis.com/css?family=Roboto&display=swap' rel='stylesheet' />
      <div className='DatosContenedor'>
        
      </div>

      <div className='cardContenedor'>
      <div className='data'>
            <Typography variant="h4">Lucas</Typography>
            <img className='ImgPerfil' src={Imagenperfil} alt="imagen de perfil"/>
            <Typography variant="subtitle1" sx={{fontSize:30}}>{mail}</Typography>
        </div>
        
        <div className='MisPublicaciones' style={{marginTop:'50px'}} >
        <Typography variant="h4">Mis Publicaciones</Typography>
        </div>
        <div className="productos">
        {publicaciones.map((publicacion) => (
            <div style={{textAlign: 'center', marginBottom: '25px'}}>
              <div style={{ backgroundImage: 'url(' + publicacion.url + ')' }} className='carta' onClick={()=> handleOpenDetails(publicacion)}></div>
              
              <div style={{display: 'flex', textAlign:'center', justifyContent: 'center'}}>
                <h3 style={{fontFamily: 'Alatsi', margin: 0}}>{publicacion.titulo}</h3>
                <DeleteIcon sx={{color: red['A700'], cursor: 'pointer'}} onClick={() => deletePublicacion(publicacion.titulo)}/>
              </div>
            </div>))}  
        </div>
        <DetailsCard show={openDetails} image={image} name={name} handleCloseDetails ={() =>{setOpenDetails(!openDetails)}} />
        {showAlert && <Alert variant='filled' severity="success" onClose={() => {setShowAlert(false)}}>¡Su producto se ha eliminado con éxito!</Alert>}
      </div>

    </div>   
    </Wrapper>
  )
}

export default Perfil