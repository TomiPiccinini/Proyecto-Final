import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80%;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 5px 0px;
  
  
`

export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 40px;
  padding: 15px;
`

export const Img = styled.img`
  width: 400px;
  height: 400px;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const Icons = styled.img`
  width: 200px;
  height: 200px;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  transition: all 0.4s;
  &:hover{
    transform: translateY(-3px);
  }
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 40px;
  background-color: #a324;
  border-radius: 50px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  box-shadow: 8px 8px 8px #c9c9c9;
  opacity: 1;
  transition: all .4s;
  &:hover{
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`

// export const CardContainer = styled.div`
//   width: 90vw;
//   max-width: 260px;
//   height: 300px;
// `

// export const Card = styled.div`
//     position: relative;
//     width: 80vw;
//     max-width: 260px;
//     height: 250px;
//     box-shadow: 0px 0px 60px 0px rgba(0,0,0,0.30);
//     border-radius: 20px;
//     background-size: cover;
//     background-position: center;
//   `
