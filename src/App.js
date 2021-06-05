
import { Component } from "react";
import { FormRegister, NoteList } from "./Components";
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      notes: []
    };
  }

  createNote(title, text) {
    const newNote = {
      title,
      text
    }

    const newNoteList = [...this.state.notes, newNote]
    const newState = {
      notes: newNoteList
    };
    
    this.setState(newState);
  }

  deleteNote(index) {
    let notes = this.state.notes;
    notes.splice(index,1)

    const newState = {
      notes: notes
    };
    
    this.setState(newState);
  }

  render() {
    return (
      <section className="contend">
        <FormRegister createNote={this.createNote.bind(this)}/>
        <NoteList 
          deleteNote={this.deleteNote.bind(this)}
          notes={this.state.notes}
        />
      </section>
    );
  }
}

export default App;
