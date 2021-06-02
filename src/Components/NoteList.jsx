import React, { Component } from "react"
import NoteCard from "./NoteCard"

class NoteList extends Component {
  
  render() {
    return (
      <ul>
        {["Trabalho","Estudos","Casa"].map((categories) => {
          return (
            <li>
              <div>{ categories }</div>
              <NoteCard/>
            </li>
            )
          })
        }
      </ul>
    );
  }
}

export default NoteList;