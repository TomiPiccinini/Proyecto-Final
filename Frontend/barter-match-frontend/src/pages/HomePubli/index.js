import React, { useState, useMemo, useRef  } from 'react'
import NavBar from '../../components/NavBar'
import { Container, Wrapper } from './styled'
import HomeCard from '../../components/HomeCard'
import { Button } from '@mui/material';
import {styles} from './styles.css';
import Dialog from '../../components/Dialog'
import {Productos} from './constants'
import history from "../../utils/history"
import DetailsCard from "../../components/DetailsCard"
import { fontSize } from '@mui/system';



const HomePublicaciones = () => {

  const [currentIndex, setCurrentIndex] = useState(Productos.length - 1)
  const [open,setOpen] = useState(false)
  const [openDetails,setOpenDetails] = useState(false)
  const [name,setName] = useState('')
  const [image,setImage] = useState('')
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
    if (nameToDelete === "Chaleco" && direction === "right"){
      handleOpen()
    }
    
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

  const handleOpenDetails = (name,imagen)=>{
    setName(name)
    setImage(imagen)
    setOpenDetails(!openDetails)
  }

  return (
    <Wrapper>
      <NavBar />
      <Container>
        <div style={{marginTop: '70px'}}>
        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
        <div className='cardContainer'>
          {Productos.map((producto, index) => (
            <HomeCard
              ref={childRefs[index]}
              className='swipe'
              key={producto.titulo}
              onSwipe={(dir) => swiped(dir, producto.titulo, index)}
              onCardLeftScreen={() => outOfFrame(producto.titulo, index)}
              
            >
              <div
                onDoubleClick={()=> handleOpenDetails(producto.titulo,producto.url)}
                style={{ backgroundImage: 'url(' + producto.url + ')'}}
                className='card'
                
              >
                <h3>{producto.titulo}</h3>
                
              </div>
              
             
            </HomeCard>
          ))}
        </div>
        <div className='buttons' style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
          <p style={{fontWeight: 'bold', color: '#fff'}}>Deslice hacia la izquierda si no le gusta el producto.<br></br>Deslice hacia la derecha si el producto le gusta.</p>
          <div>
            <img src="https://i.ibb.co/Jp8YJYD/Like-icon-on-transparent-PNG.png" className='button' alt="dislike" border="0" style={{width:"100px", rotate:"180deg" }} onClick={() => swipe('left')}/>
            
            <img src="https://i.ibb.co/5YFjNZS/reload.png" alt="reload" className='button' border="0" style={{width:"100px"}} onClick={() => goBack()}/>
            
            <img src="https://i.ibb.co/Jp8YJYD/Like-icon-on-transparent-PNG.png" alt="Like-icon-on-transparent-PNG" className='button' border="0" style={{width:"100px"}} onClick={() => swipe('right')}/>
          </div>
        </div>
        <DetailsCard open={openDetails} image={image} name={name} handleCloseDetails ={() =>{setOpenDetails(!openDetails)}} />    
        <Dialog name={open} handleClose ={() =>{setOpen(!open)}}  />
        
        <div style={{textAlign: 'center', margin: '30px'}}>
          <Button variant="contained" style={{fontWeight: 'bold' , backgroundColor:'rgb(82 97 205)', borderRadius:'50%' ,height:'60px',width:'60px', fontSize:'1.7em'}} className="button" onClick={() => history.push("new")}>+</Button>
        </div>
      </div>
      </Container>
    </Wrapper>
  )
}

export default HomePublicaciones