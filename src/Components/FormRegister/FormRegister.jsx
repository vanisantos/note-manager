import React, { Component } from "react"
import "./style.css"

class FormRegister extends Component {
  render() { 
    return ( 
      <form className="form-register">
        <input 
          type="text" 
          placeholder="Título"
          className="form-register_input"
        />
        <textarea
          rows={15} 
          placeholder="Escreva sua nota..."
          className="form-register_input"
        />
        <button className="form-register_input form-register_submit">
          Criar nota
        </button>
      </form>
    );
  }
}
 
export default FormRegister;