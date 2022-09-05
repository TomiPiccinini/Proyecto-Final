import React from 'react'
import Header from '../../components/Header'
import { Wrapper, Container , Publicaciones , Matchs , Title, Datos, Nombre, Email , ImgPerfil ,ContainerColumn, Trash} from './styled'
import Imagenperfil from '../../images/User-Profile.png'
import { PRODUCTS } from '../HomePubli/constants'

const Perfil = () => {
  return (
    <Wrapper>
      <Header />
      
      <Container>
        <Publicaciones>
          <Title>Mis Publicaciones</Title>
          <ContainerColumn>
          {
            PRODUCTS.map((p)=> {
              return(
                <ImgPerfil src={p.value} alt="p.title"/>
              )
            })
          }
          </ContainerColumn>
          <Trash><i class="fa fa-trash fa-4x" aria-hidden="true"></i></Trash>
        </Publicaciones>
        <Datos>
          <Title>Mi Perfil</Title>
          <ImgPerfil src={Imagenperfil} alt="imagen de perfil"></ImgPerfil>
          <Nombre>Usuario: Lucas Perri</Nombre>
          <Email>Email: perris@gmail.com</Email>
        </Datos>
        <Matchs>
          <Title>Mis Matchs</Title>
          <ContainerColumn>
          {
            PRODUCTS.map((p)=> {
              return(
                <ImgPerfil src={p.value} alt="p.title"/>
              )
            })
          }
          </ContainerColumn>
          <Trash><i class="fa fa-trash fa-4x" aria-hidden="true"></i></Trash>
        </Matchs>
      </Container>
    </Wrapper>
  )
}

export default Perfil