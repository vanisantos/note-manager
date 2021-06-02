import {NoteList} from "./Components/NoteList"

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título"/>
        <textarea placeholder="Escreva sua nota"/>
        <button>Criar nota</button>
      </form>
      <NoteList/>
    </section>
  );
}

export default App;
