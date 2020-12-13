import React, { useState } from "react";

function CreateNote(props) {
  const [titleTeaxt, setTitleText] = useState("");
  const [noteText, setNoteText] = useState("");

  function handleTitle(event) {
    const value = event.target.value;
    setTitleText(value);
  }
  function handleNote(event) {
    const value = event.target.value;
    setNoteText(value);
  }
  function makeNote(event) {
    console.log(props);

    props.AddNote({
      title: titleTeaxt,
      note: noteText
    });
    setTitleText("");
    setNoteText("");
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          value={titleTeaxt}
          onChange={handleTitle}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={noteText}
          onChange={handleNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={makeNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateNote;
