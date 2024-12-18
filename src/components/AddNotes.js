import React, { useContext }  from 'react'
import NoteContext from "../context/notes/NoteContext"
import { useState } from 'react';

const AddNotes = () => {
  const context = useContext(NoteContext);
  const {addNote} = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""});

  const handleClick = (event) => {
    event.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""});
  }

  const onChange = (event) => {
      setNote({...note, [event.target.name]: event.target.value});
  }
  
  return (
    <div>
        <h2 className='container'>Add Note</h2>
        <div className="container mb-3 mx-10">
            <label htmlFor="title" className="form-label">Enter Your Title</label>
            <input className="form-control" type="text" id='title' name='title' value={note.title} minLength={5} required onChange={onChange} placeholder="" aria-label="title"/>
            </div>

        <div className="container mb-3 mx-10">
            <label htmlFor="description" className="form-label">Enter your description</label>
            <textarea className="form-control" id="description" name='description' value={note.description} minLength={5} required onChange={onChange} rows="3"></textarea>
        </div>

        <div className="container mb-3 mx-10">
            <label htmlFor="tag" className="form-label">Enter a tag </label>
            <input className="form-control" type="text" id='tag' name='tag' value={note.tag} onChange={onChange} placeholder="" aria-label="tag"/>
        </div>

        <div className="container mb-3 mx-10">
            <button type="button" className="btn btn-outline-primary" onClick={handleClick} disabled={note.title.length < 5 || note.description.length < 5}>Add Note</button>
        </div>
        
    </div>
  )
}

export default AddNotes
