import React, { Component } from "react"
import CardNote from "../CardNote";
import "./style.css"

class NoteList extends Component {
  
  render() {
    return (
      <ul className="note-list">
        {["Trabalho","Estudos","Casa"].map((categories, index) => {
          return (
            <li className="note-list_item" key={index}>
              <CardNote/>
            </li>
            )
          })
        }
      </ul>
    );
  }
}

export default NoteList;