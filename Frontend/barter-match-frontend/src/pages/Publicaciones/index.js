import React from 'react'
import Header from '../../components/Header'
import { Container, Title, Wrapper, Img, ButtonsContainer, Icons } from './styled'
import Corazon from '../../images/corazon.png'
import Flecha from '../../images/flecha.png'
import Remera from '../../images/remera.png'

const Publicaciones = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Title>Publicaciones</Title>
        <Img src={Remera} alt='Acá iría el primer producto'/>
        <ButtonsContainer>
          <Icons src={Corazon} alt='Corazón me gusta' onClick={() => console.log('Dispatchear endpoint me gusta')}/>
          <Icons src={Flecha} alt='Flecha siguiente' onClick={() => console.log('Nuevo producto acá')}/>
        </ButtonsContainer>
      </Container>
    </Wrapper>
  )
}

export default Publicaciones