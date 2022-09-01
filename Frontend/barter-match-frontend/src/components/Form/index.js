import React, {useState} from 'react';
import { Input, InputContainer, Button } from './styled';

const Formulario = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        tipo: '',
				observaciones: ''
    })

    const handleInputChange = (event) => {
         console.log(event.target.name)
         console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

		const adjuntarImagen = () => {

		}

    return (
					<form className="row" onSubmit={enviarDatos}>
							<InputContainer>
									<Input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></Input>
							</InputContainer>
							<InputContainer>
									<Input type="text" placeholder="Tipo de producto" className="form-control" onChange={handleInputChange} name="tipo"></Input>
							</InputContainer>
							<InputContainer>
									<Input type="text" placeholder="Observaciones" className="form-control" onChange={handleInputChange} name="observaciones"></Input>
							</InputContainer>
							<InputContainer>
								<Button type="submit" onClick={() => adjuntarImagen()} fontSize="15px">Adjuntar imágen</Button>
							</InputContainer>
							<Button type="submit" onClick={() => enviarDatos()}>Publicar</Button>
					</form>
    );
}
 
export default Formulario;