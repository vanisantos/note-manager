
import { Component } from "react";
import { FormRegister, NoteList, CategoriesList } from "./Components";
import "./assets/App.css"
import './assets/index.css';
import Categories from "./database/categories";
import Notes from "./database/notes";

class App extends Component {
  constructor() {
    super();
    
    this.categories = new Categories();
    this.notes = new Notes();
  }

  render() {
    return (
      <section className="contend">
        <FormRegister 
          categories={this.categories.categories}
          createNote={this.notes.createNote}
        />
        <main className="main-contend">
          <CategoriesList 
            addCategory={this.categories.addCategory}
            categories={this.categories.categories}/>
          <NoteList
            deleteNote={this.notes.deleteNote}
            notes={this.notes.notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
