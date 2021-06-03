import React, { Component } from "react"
import CardNote from "../CardNote";
import "./style.css"

class NoteList extends Component {

  render() {
    return (
      <ul className="note-list">
        {this.props.notes.map((notes, index) => {
          return (
            <li className="note-list_item" key={index}>
              <CardNote title={notes.title} text={notes.text}/>
            </li>
            )
          })
        }
      </ul>
    );
  }
}

export default NoteList;