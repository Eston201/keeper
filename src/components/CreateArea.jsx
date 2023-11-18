import { useState } from "react"

export default function CreateArea({onAdd}) {
    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    function onInputChange(e) {
        const {value, name} = e.target;

        setNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function addNote(e) {
        onAdd(note);
        setNote({
            title: '',
            content: ''
        })
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={addNote}>
                <input onChange={onInputChange} name="title" placeholder="Title" value={note.title}/>
                <textarea onChange={onInputChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
                <button>Add</button>
            </form>
        </div>
    )
}