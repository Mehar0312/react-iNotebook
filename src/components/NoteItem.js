import React, { useContext }  from 'react'
import NoteContext from "../context/notes/NoteContext"

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const {deleteNote} = context;
    const {note} = props;

  return (
    <div className='col-md-4'>
        <div className="card my-3">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title mr-3">{note.title}</h5>
                    <p className="card-text mx-3">{note.tag}</p>
                </div>
                
                {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
                <p className="card-text">{note.description}</p>
                {/* <a href="#" className="card-link">Card link</a> */}
                {/* <a href="#" className="card-link">Another link</a> */}
                <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id) }}></i>
                <i className="fa-solid fa-pen-to-square mx-2"></i>
            </div>
        </div>
    </div>
  )
}

export default NoteItem
