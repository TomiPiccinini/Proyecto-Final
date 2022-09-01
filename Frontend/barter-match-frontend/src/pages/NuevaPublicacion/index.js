import React from 'react'
import Header from '../../components/Header'
import { Container, Title, Wrapper, Button } from './styled'

const NuevaPublicacion = () => {

  return (
    <Wrapper>
      <Header />
      <Container>
        <Title>Nueva publicación</Title>
        <Button>Publicar</Button>
      </Container>
    </Wrapper>
  )
}

export default NuevaPublicacion