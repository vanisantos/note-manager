export default class Notes {
  constructor(){
    this.notes = [];
    this._subscribed = [];
  }

  subscribe(subscribeFunction){
    this._subscribed.push(subscribeFunction)
  }

  unsubscribe(unsubscribeFunction){
    this._inscritos = this._inscritos.filter(func => func !== unsubscribeFunction);
  }

  notify(){
    this._subscribed.forEach(func => {
      func(this.notes);
    });
  }

  createNote(title, text, category){
    const newNote = new Note(title, text, category);
    this.notes.push(newNote);
    this.notify();
  }

  deleteNote(index){
    this.notes.splice(index,1)
    this.notify();
  }

}

class Note {
  constructor(title, text, category){
    this.title = title;
    this.text = text;
    this.category = category;
  }
}