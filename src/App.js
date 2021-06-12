
import { Component } from "react";
import { FormRegister, NoteList, CategoriesList } from "./Components";
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      categories: [],
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

  addCategory(category) {
    const newCategoriesList = [...this.state.categories, category]
    const newState = {
      ...this.state,
      categories: newCategoriesList
    };
    
    this.setState(newState);
  }

  render() {
    return (
      <section className="contend">
        <FormRegister createNote={this.createNote.bind(this)}/>
        <main className="main-contend">
          <CategoriesList 
            addCategory={this.addCategory.bind(this)}
            categories={this.state.categories}/>
          <NoteList
            deleteNote={this.deleteNote.bind(this)}
            notes={this.state.notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
