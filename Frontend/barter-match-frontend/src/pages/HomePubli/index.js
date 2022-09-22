import React, { useState, useMemo, useRef  } from 'react'
import NavBar from '../../components/NavBar'
import { Container, Wrapper } from './styled'
import HomeCard from '../../components/HomeCard'
import {styles} from './styles.css';
import Dialog from '../../components/Dialog'
import {Productos} from './constants'
import history from "../../utils/history"
import { Button } from '@mui/material';

const HomePublicaciones = () => {

  const [currentIndex, setCurrentIndex] = useState(Productos.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const [open,setOpen] = useState(false)
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(Productos.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < Productos.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    if (nameToDelete === "chaleco" && direction === "right"){
      handleOpen()
    }
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < Productos.length) {
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

  const handleOpen = () =>{
    setOpen(!open)
    
  }

  

  return (
    <Wrapper>
      <NavBar />
      <Container>
        <div style={{marginTop: '80px'}}>
        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
        <div className='cardContainer'>
          {Productos.map((producto, index) => (
            <HomeCard
              ref={childRefs[index]}
              className='swipe'
              key={producto.name}
              onSwipe={(dir) => swiped(dir, producto.name, index)}
              onCardLeftScreen={() => outOfFrame(producto.name, index)}
            >
              <div
                style={{ backgroundImage: 'url(' + producto.url + ')'}}
                className='card'
              >
                <h3>{producto.name}</h3>
              </div>
            </HomeCard>
          ))}
        </div>
        <div className='buttons' style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
          <p style={{fontWeight: 'bold', color: '#fff'}}>Deslice hacia la izquierda si no le gusta el producto.<br></br>Deslice hacia la derecha si el producto le gusta.</p>
          <div>
            <button style={{ backgroundColor: !canSwipe && '#c3c4d3', cursor: 'pointer' }} onClick={() => swipe('left')}>¡No me queda!</button>
            <button style={{ backgroundColor: !canGoBack && '#c3c4d3', cursor: 'pointer' }} onClick={() => goBack()}>Deshacer</button>
            <button style={{ backgroundColor: !canSwipe && '#c3c4d3', cursor: 'pointer' }} onClick={() => swipe('right')}>¡Me queda!</button>
          </div>
        </div>
        <Dialog name={open} handleClose ={() =>{setOpen(!open)}}  
        />
        <div style={{textAlign: 'center', margin: '30px'}}>
          <Button variant="contained" style={{fontWeight: 'bold'}} onClick={() => history.push("new")}>Nueva publicación</Button>
        </div>
      </div>
      </Container>
    </Wrapper>
  )
}

export default HomePublicaciones