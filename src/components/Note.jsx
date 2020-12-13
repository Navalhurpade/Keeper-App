import React from "react";
import { deleteNote } from "./NotesData";

function Note(props) {
 
  function deleteThisNote() {
    props.deleteNote(props.id)
  }

  return (
    <div className="note">
      <h1> {props.title} </h1>
      <p> {props.note} </p>
      <button onClick={deleteThisNote} >Delete </button>
    </div>
  );
}

export default Note;
