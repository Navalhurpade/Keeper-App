import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab, Zoom } from "@material-ui/core";

function CreateNote(props) {
  const [titleTeaxt, setTitleText] = useState("");
  const [noteText, setNoteText] = useState("");
  const [isExpanded, setisExpanded] = useState(false);

  function handleTitle(event) {
    const value = event.target.value;
    setTitleText(value);
  }
  function handleNote(event) {
    const value = event.target.value;
    setNoteText(value);
  }
  function makeNote(event) {
    props.AddNote({
      title: titleTeaxt,
      note: noteText
    });
    setTitleText("");
    setNoteText("");
    setisExpanded(false);
    event.preventDefault();
  }
  function Expand() {
    setisExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            autoComplete="off"
            value={titleTeaxt}
            onChange={handleTitle}
            name="title"
            placeholder="Title"
          />
        ) : null}
        <textarea
          value={noteText}
          onChange={handleNote}
          name="note"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          onClick={Expand}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={makeNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
