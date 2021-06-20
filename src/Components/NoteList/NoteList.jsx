import React, { Component } from "react"
import CardNote from "../CardNote";
import "./style.css"

class NoteList extends Component {
  constructor(){
    super();
    this.state = {
      notes:[]
    }
  }

  componentDidMount(){
    this.props.notes.subscribe(this._newNotes.bind(this))
  }

  _newNotes(notes){
    this.setState({...this.state, notes})
  }
  render() {
    return (
      <ul className="note-list">
        {this.state.notes.map((note, index) => {
          return (
            <li className="note-list_item" key={index}>
              <CardNote 
                index={index}
                deleteNote={this.props.deleteNote}
                title={note.title} 
                text={note.text}
                category={note.category}
              />
            </li>
            )
          })
        }
      </ul>
    );
  }
}

export default NoteList;