import React, { Component } from 'react';
import './style.css'

class CardNote extends Component {
  render() { 
    return ( 
      <section className="card-note">
        <header className="card-note_header">
          <h3 className="card-note_title">Título</h3>
        </header>
        <p className="card-note_text">Escreva sua nota</p>
      </section>
     );
  }
}
 
export default CardNote;