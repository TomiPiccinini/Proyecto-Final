import React from 'react'
import Header from '../../components/Header'
import { Wrapper, Container , Publicaciones , Matchs, Datos, ImgPerfil ,ContainerColumn} from './styled'
import Imagenperfil from '../../images/User-Profile.png'
import { PRODUCTS } from '../HomePubli/constants'
import DeleteIcon from '@mui/icons-material/DeleteRounded';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardMedia } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';







const Perfil = () => {
  return (
    <Wrapper>
      <Header />
      
      <Container>
        <Publicaciones>
          <Typography variant="h4">Mis Publicaciones</Typography>
          <ContainerColumn>
          
          {
            PRODUCTS.map((p)=> {
              return(
                <Card sx={{ minWidth:200 , m:3 , border: "1px solid grey"}}>
                  <CardMedia
                  component='img'
                  height='250'
                  image={p.value}
                  alt={p.title}
                  
                  />
                  <CardContent sx={{bgcolor:'gray'}}>
                    <Typography>{p.title}</Typography>
                   
                  </CardContent>
                  <CardActions sx={{bgcolor:'gray'}}> 
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
                // 
              )
            })
          }
          </ContainerColumn>
          <DeleteIcon sx={{fontSize:50, color: red['A700']}}/>
        </Publicaciones>
        <Datos>
          <Typography variant="h4">Perfil</Typography>
          <ImgPerfil src={Imagenperfil} alt="imagen de perfil"></ImgPerfil>
          <Typography variant="subtitle1" sx={{fontSize:30}}>Nombre: Lucas Perri</Typography>
          <Typography variant="subtitle1" sx={{fontSize:30}}>Email: perris@gmail.com</Typography>
        </Datos>
        <Matchs>
        <Typography variant="h4">Mis Publicaciones</Typography>
          <ContainerColumn>
          {
            PRODUCTS.map((p)=> {
              return(
                <ImgPerfil src={p.value} alt="p.title"/>
              )
            })
          }
          </ContainerColumn>
          <DeleteIcon sx={{fontSize:50, color: red['A700']}}/>
        </Matchs>
      </Container>
    </Wrapper>
  )
}

export default Perfil