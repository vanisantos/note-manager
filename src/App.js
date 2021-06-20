
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
          categories={this.categories}
          createNote={this.notes.createNote.bind(this.notes)}
        />
        <main className="main-contend">
          <CategoriesList 
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories}/>
          <NoteList
            deleteNote={this.notes.deleteNote.bind(this.notes)}
            notes={this.notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
