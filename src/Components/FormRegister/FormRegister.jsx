import React, { Component } from "react"
import "./style.css"

class FormRegister extends Component {

  constructor(props) {
    super(props);
    this.title = "";
    this.noteText = "";
  }

  _handleTitleChange(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleTextChange(event) {
    event.stopPropagation();
    this.noteText = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.noteText);
  }

  render() { 
    return ( 
      <form 
        className="form-register"
        onSubmit={this._createNote.bind(this)}
      >
        <input 
          type="text" 
          placeholder="Título"
          className="form-register_input"
          onChange={this._handleTitleChange.bind(this)}
        />
        <textarea
          rows={15} 
          placeholder="Escreva sua nota..."
          className="form-register_input"
          onChange={this._handleTextChange.bind(this)}
        />
        <button className="form-register_input form-register_submit">
          Criar nota
        </button>
      </form>
    );
  }
}
 
export default FormRegister;