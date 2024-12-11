import React, { useContext } from 'react'
import NoteContext from "../context/notes/NoteContext"
import NoteItem from './NoteItem';
import AddNotes from './AddNotes';

const Notes = (props) => {
    const context = useContext(NoteContext);
    const {notes} = context;

  return (
    <>
        <AddNotes/>
        <div className="row">
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return <NoteItem key={note._id} note={note}/>
            })}
        </div>
    </>
    
  )
}

export default Notes
