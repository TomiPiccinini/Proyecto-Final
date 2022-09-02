import React, {useState} from 'react';
import { Input, InputContainer, Button } from './styled';

const Formulario = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        tipo: '',
        asd: '',
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
        console.log('enviando datos...' + datos.nombre + ' ' + datos.tipo + ' ' + datos.asd + ' ' + datos.observaciones)
    }

		const adjuntarImagen = () => {

		}

    return (
					<form className="row" onSubmit={enviarDatos}>
							<InputContainer>
									<Input type="text" placeholder="Nombre" onChange={handleInputChange} name="nombre"></Input>
							</InputContainer>
							<InputContainer>
									<Input type="select" placeholder="Tipo de producto" onChange={handleInputChange} name="tipo"></Input>
							</InputContainer>
                            <InputContainer>
									<Input type="text" placeholder="ASD" onChange={handleInputChange} name="asd"></Input>
							</InputContainer>
							<InputContainer>
									<Input type="text" placeholder="Observaciones" onChange={handleInputChange} name="observaciones"></Input>
							</InputContainer>
							<InputContainer>
								<Button type="upload" onClick={() => adjuntarImagen()} fontSize="15px">Adjuntar imágen</Button>
							</InputContainer>
							<Button type="submit" onClick={() => enviarDatos()}>Publicar</Button>
					</form>
    );
}
 
export default Formulario;