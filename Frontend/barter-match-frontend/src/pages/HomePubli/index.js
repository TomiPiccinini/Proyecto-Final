import React, { useState } from 'react'
import Header from '../../components/Header'
import { Container, Title, Wrapper, Img, ButtonsContainer, Icons, Button } from './styled'
import Corazon from '../../images/corazon.png'
import Flecha from '../../images/flecha.png'
import { PRODUCTS } from './constants'
import history from '../../utils/history'

const HomePublicaciones = () => {
  let [count, setCount] = useState(0)

  const handleCounter = () => {
    if (PRODUCTS[count+1]) {
      setCount(count+1)
    } else setCount(0)
  }

  return (
    <Wrapper>
      <Header />
      <Container>
        <Title>{PRODUCTS[count].title}</Title>
        <Img src={PRODUCTS[count].value} alt={PRODUCTS[count].title}/>
        <ButtonsContainer>
          <Icons src={Corazon} alt='Corazón me gusta' onClick={() => console.log('Dispatchear endpoint me gusta')}/>
          <Icons src={Flecha} alt='Flecha siguiente publicación' onClick={() => handleCounter()}/>
        </ButtonsContainer>
        <Button onClick={() => history.push('/new')}>Nueva publicación</Button>
      </Container>
    </Wrapper>
  )
}

export default HomePublicaciones