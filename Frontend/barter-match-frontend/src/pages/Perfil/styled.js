import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  width:100%;
  height:100%;
  display:flex;
  //background-color:grey;
  
`

export const Publicaciones = styled.div`
  width:33%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:top;
  border-right:1px solid grey;
  
`
export const Datos = styled.div`
  width:33%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  border-right:1px solid grey;
  
`

export const Trash = styled.div`
  cursor:pointer;
  margin-top:10%;

`

export const Matchs = styled.div`
  width:33%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:top;
  
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 40px;
  padding: 15px;
  text-align:center;
`

export const Nombre = styled.div`
  font-weight: bold;
  font-size: 40px;
  padding: 15px;
  text-align:center;
`
export const Email = styled.div`
  font-weight: bold;
  font-size: 40px;
  padding: 15px;
  text-align:center;
`

export const ImgPerfil = styled.img`
  width: 200px;
  height: 200px;
  padding: 10px;
  margin: 10px;
  cursor:pointer;
`

export const ContainerColumn = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  heigth:100%;
  flex-wrap:wrap;
  justify-content:center;
`