import React, { useState } from "react";
import "../Style/Red-Form-Style.css"
import { v4 as uuidv4 } from "uuid";


function TareaFormulario(props) {

    const [input, setInput] = useState('');


    const manejarCambio = e => {
        setInput(e.target.value); 
    }


    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false

        }
        props.onSubmit(tareaNueva);
    }




    return (
        <form 
            className="tarea-formulario"
            onSubmit={manejarEnvio}>
            <input 
               className="tarea-input"
               type="text"
               placeholder="escribi aca paaa"
               name="texto"
               onChange={manejarCambio}
            />
            <button className="tarea-boton">
                Agrega Tareas
            </button>
        </form>
    )
}

export default TareaFormulario;