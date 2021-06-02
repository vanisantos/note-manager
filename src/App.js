
import { Component } from "react";
import FormRegister from "./Components/FormRegister";
import NoteList from "./Components/NoteList"

class App extends Component {
  render() {
    return (
      <section>
        <FormRegister/>
        <NoteList/>
      </section>
    );
  }
}

export default App;
