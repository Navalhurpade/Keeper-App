import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note";
import CreateNote from "./CreateNote";
// import notes from "./NotesData";

function App() {
  const [note, setNote] = useState([
    { title: "WelCome", note: "this is a Note !" }
  ]);

  return (
    <div>
      <Header />
      <CreateNote />
      {note().map((noteobj) => (
        <Note id={noteobj.id} title={noteobj.title} note={noteobj.note} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
