import React from 'react'
import Header from '../../components/Header'
import { Container, Title, Wrapper } from './styled'
import Formulario from '../../components/Form'

const NuevaPublicacion = () => {

  return (
    <Wrapper>
      <Header />
      <Container>
        <Title>Nueva publicación</Title>
        <Formulario />
      </Container>
    </Wrapper>
  )
}

export default NuevaPublicacion