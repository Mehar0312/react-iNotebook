import { useState } from 'react';
import NoteContext from './NoteContext'
// import { useState } from 'react'

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "674f9624bc8bf4ab3373eb7b",
          "user": "674e3bf2d9bf652a70c0d039",
          "title": "Daily Schedule",
          "description": "Exercise daily.",
          "tag": "discipline",
          "date": "2024-12-03T23:37:08.637Z",
          "__v": 0
        },
        {
          "_id": "675498474a13e9404d0909c0",
          "user": "674e3bf2d9bf652a70c0d039",
          "title": "Songs",
          "description": "Sookhi baat cheet",
          "tag": "rap",
          "date": "2024-12-07T18:47:35.946Z",
          "__v": 0
        },
        {
          "_id": "675498734a13e9404d0909c2",
          "user": "674e3bf2d9bf652a70c0d039",
          "title": "Play",
          "description": "Rockstar Games",
          "tag": "Games",
          "date": "2024-12-07T18:48:19.463Z",
          "__v": 0
        }
      ];

    const [notes, setNotes] = useState(notesInitial);
    
    //Add a Note
    const addNote = (title, description, tag)=> {

        const note = {
            "_id": "675498734a13e9404d0909c2",
            "user": "674e3bf2d9bf652a70c0d039",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-12-07T18:48:19.463Z",
            "__v": 0
          };
        // setNotes(notes.push(note)); //push:  updates an array
        setNotes(notes.concat(note)); // concat: returns a new array.
    }

    //Delete a Note
    const deleteNote = (id)=> {
        const newNotes = notes.filter((note) => {return note._id !== id})
        setNotes(newNotes);
    }

    //Edit a Note
    const editNote = ()=> {
        
    }
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;