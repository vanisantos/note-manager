export default class Notes {
  constructor(){
    this.notes = [];
    this._subscribed = [];
  }

  subscribe(subscribeFunction){
    this._subscribed.push(subscribeFunction)
  }

  notify(){
    this._subscribed.forEach(func => {
      func(this.categories);
    });
  }

  createNote(title, text, category){
    const newNote = new Note(title, text, category);
    this.notes.push(newNote);
  }

  deleteNote(index){
    this.notes.splice(index,1)
  }

}

class Note {
  constructor(title, text, category){
    this.title = title;
    this.text = text;
    this.category = category;
  }
}