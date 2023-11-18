
import Header from "./Header";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Note from "./Note";
import { useState } from "react";

export default function App() {
    const [notes, setNotes] = useState([])

    function addNote(note) {
        setNotes((prevNotes) => {
            return [...prevNotes, note];
        });
    }

    function deleteNote(index) {
        setNotes((prevNotes) => {
            return prevNotes.filter((_noteItem, noteIndex) => index !== noteIndex)
        })
    }

    return (
        <div>
            <Header></Header>
            <CreateArea onAdd={addNote}/>
            {
                notes.map(({title, content}, index) => {
                    return (
                        <Note 
                            key={index}
                            index={index}
                            title={title} 
                            content={content}
                            onDelete={deleteNote}
                        />
                    );
                })
            }
            <Footer></Footer>
        </div>
    );
}