
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { notes } from "../notes";

function createNote({key, title, content}) {
    return <Note key={key} title={title} content={content}/>
}

export default function App() {
    return (
        <div>
            <Header></Header>
            {
                notes.map(createNote)
            }
            <Footer></Footer>
        </div>
    );
}