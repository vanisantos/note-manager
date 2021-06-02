
import { Component } from "react";
import { FormRegister, NoteList } from "./Components";
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  render() {
    return (
      <section className="contend">
        <FormRegister/>
        <NoteList/>
      </section>
    );
  }
}

export default App;
