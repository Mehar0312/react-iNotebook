import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from "../context/notes/NoteContext"
import NoteItem from './NoteItem';
import AddNotes from './AddNotes';

const Notes = (props) => {
  const context = useContext(NoteContext);
  const {notes, getNotes, editNote} = context;
  const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""});
  
  useEffect(() => {
    getNotes()
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
  }

  const handleClick = (event) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();  //Taking reference of cancel button using ref attribute.
  }

  const onChange = (event) => {
      setNote({...note, [event.target.name]: event.target.value});
  }

  return (
    <>
        <AddNotes/>

        <button  ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Launch static backdrop modal
        </button>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="container mb-3 mx-10">
                  <label htmlFor="title" className="form-label">Enter Your Title</label>
                  <input className="form-control" type="text" id='etitle' name='etitle' value={note.etitle} minLength={5} required onChange={onChange} placeholder="" aria-label="title"/>
                </div>

                <div className="container mb-3 mx-10">
                  <label htmlFor="description" className="form-label">Enter your description</label>
                  <textarea className="form-control" id="edescription" name='edescription' value={note.edescription} minLength={5} required onChange={onChange} rows="3"></textarea>
                </div>

                <div className="container mb-3 mx-10">
                  <label htmlFor="tag" className="form-label">Enter a tag </label>
                  <input className="form-control" type="text" id='etag' name='etag' value={note.etag} onChange={onChange} placeholder="" aria-label="tag"/>
                </div>
              </div>
              <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary" onClick={handleClick} disabled={note.etitle.length < 5 || note.edescription.length < 5} >Update Note</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
            <h2>Your Notes</h2>
            <div className="container mx-2">
              {notes.length === 0 && 'No notes to display.'}
            </div>
            {notes.map((note) => {
                return <NoteItem key={note._id} note={note} updateNote={updateNote}/>
            })}
        </div>
    </>
    
  )
}

export default Notes
