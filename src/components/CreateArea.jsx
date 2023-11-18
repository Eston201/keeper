import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function CreateArea({onAdd}) {
    const [isExpanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true)
    }

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
            <form onSubmit={addNote} className="create-note">
                {isExpanded && <input onChange={onInputChange} name="title" placeholder="Title" value={note.title}/>}
                <textarea onClick={expand} onChange={onInputChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content}/>
                <Zoom in={isExpanded}>
                    <Fab>
                        <AddIcon/>
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}