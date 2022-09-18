import React from 'react'
import NavBar from '../../components/NavBar'
import { Container, Title, Wrapper } from './styled'
import Formulario from '../../components/Form'

const NuevaPublicacion = () => {

  return (
    <Wrapper>
      <NavBar />
      <Container>
        <Title>Nueva publicación</Title>
        <Formulario />
      </Container>
    </Wrapper>
  )
}

export default NuevaPublicacion