import React, { useState, useMemo, useRef  } from 'react'
import Header from '../../components/Header'
import { Container, Wrapper } from './styled'
import HomeCard from '../../components/HomeCard'
import {styles} from './styles.css';

const productos = [
  {
    name: 'pantalon marron',
    url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/147/631/products/hghg11-96c8cd70d672800bf115877075983169-1024-1024.jpg'
  },
  {
    name: 'Camisa',
    url: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd4%2F65%2Fd46550a1e51b28e9926750e3399fc498db543e59.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_shirtjackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]'
  },
  {
    name: 'chaleco',
    url: 'https://d368r8jqz0fwvm.cloudfront.net/32611-product_lg/chaleco-de-hombre-polar-amaro.jpg'
  },
  {
    name: 'Saco marron',
    url: 'https://media.gq.com.mx/photos/5ec3695a8f9c683ef7a48884/master/w_1600,c_limit/4024500704_2_1_1.jpg'
  }

]

const HomePublicaciones = () => {

  const [currentIndex, setCurrentIndex] = useState(productos.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(productos.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < productos.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < productos.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <Wrapper>
      <Header />
      <Container>
        <div>
        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
        <h1 className='title'>BarterMatch</h1>
        <div className='cardContainer'>
          {productos.map((producto, index) => (
            <HomeCard
              ref={childRefs[index]}
              className='swipe'
              key={producto.name}
              onSwipe={(dir) => swiped(dir, producto.name, index)}
              onCardLeftScreen={() => outOfFrame(producto.name, index)}
            >
              <div
                style={{ backgroundImage: 'url(' + producto.url + ')' }}
                className='card'
              >
                <h3>{producto.name}</h3>
              </div>
            </HomeCard>
          ))}
        </div>
        <div className='buttons'>
          <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>No me queda!</button>
          <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Deshacer</button>
          <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Me queda!</button>
        </div>
        
      </div>
      </Container>
    </Wrapper>
  )
}

export default HomePublicaciones