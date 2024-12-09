import React, { useContext } from 'react'
import NoteContext from "../context/notes/NoteContext"
import NoteItem from './NoteItem';

const Notes = (props) => {
    const context = useContext(NoteContext);
    const {notes, setNotes} = context;

  return (
    
    <div className="row">
        <h2>Your Notes</h2>
        {notes.map((note) => {
            return <NoteItem note={note}/>
        })}
    </div>
  )
}

export default Notes
