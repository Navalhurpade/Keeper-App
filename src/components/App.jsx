import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App() {
  const [notes, setNote] = useState([]);

  function AddNote(note) {
    setNote((prevNotes) => [...prevNotes, note]);
  }

  function DeleteNote(id) {
    console.log(id);
    const remainingnotes = notes.filter((noteobj, index) => index != id);
    setNote(remainingnotes);
  }

  return (
    <div>
      <Header />
      <CreateNote AddNote={AddNote} />

      {notes.map((noteItem, Currentindex) => (
        <Note
          key={Currentindex}
          id={Currentindex}
          deleteNote={DeleteNote}
          title={noteItem.title}
          note={noteItem.note}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
