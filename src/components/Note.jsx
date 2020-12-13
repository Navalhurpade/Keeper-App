import React from "react";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

function Note(props) {
 
  function deleteThisNote() {
    props.deleteNote(props.id)
  }

  return (
    <div className="note">
      <h1> {props.title} </h1>
      <p> {props.note} </p>
      <button onClick={deleteThisNote}> <DeleteRoundedIcon /> </button>
    </div>
  );
}

export default Note;
