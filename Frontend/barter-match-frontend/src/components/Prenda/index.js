import React from 'react'


export const ListaDePrendas = (props) => {
  
    const prendas = props.prendas;
    const listItems = prendas.map((prenda) =>
      <li>{prenda}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

export default ListaDePrendas;

  
  