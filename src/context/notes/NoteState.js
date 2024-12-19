import { useState } from 'react';
import NoteContext from './NoteContext'
// import { useState } from 'react'

const NoteState = (props) => {
  const host = "http://localhost:5000"
    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial);

    //Get all Notes
    const getNotes = async ()=> {
      //API Call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0ZTNiZjJkOWJmNjUyYTcwYzBkMDM5In0sImlhdCI6MTczMzI2NjcwNn0.x3qA4W-nlR6ovs0eFklT0QEmJqbhWtUD43gLvH7lj8U', 

        }
      });

      const json = await response.json();
      console.log(json);
      setNotes(json);
      
    }
    
    //Add a Note
    const addNote = async (title, description, tag)=> {
      //API Call
      const response = await fetch(`${host}/api/notes/addnotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0ZTNiZjJkOWJmNjUyYTcwYzBkMDM5In0sImlhdCI6MTczMzI2NjcwNn0.x3qA4W-nlR6ovs0eFklT0QEmJqbhWtUD43gLvH7lj8U', 

        },
        body: JSON.stringify({title, description, tag})
      });
      const note = await response.json();
      // setNotes(notes.push(note)); //push:  updates an array
      setNotes(notes.concat(note)); // concat: returns a new array.
    }

    //Delete a Note
    const deleteNote = async (id)=> {
      //API Call
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0ZTNiZjJkOWJmNjUyYTcwYzBkMDM5In0sImlhdCI6MTczMzI2NjcwNn0.x3qA4W-nlR6ovs0eFklT0QEmJqbhWtUD43gLvH7lj8U', 

        }
      });
      const json = await response.json();
      console.log(json);

      //Logic to delete a note on client side.
      const newNotes = notes.filter((note) => {return note._id !== id})
      setNotes(newNotes);
    }

    //Edit a Note
    const editNote = async (id, title, description, tag)=> {
      //API Call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0ZTNiZjJkOWJmNjUyYTcwYzBkMDM5In0sImlhdCI6MTczMzI2NjcwNn0.x3qA4W-nlR6ovs0eFklT0QEmJqbhWtUD43gLvH7lj8U', 

        },
        body: JSON.stringify({title, description, tag})
      });

      const json = await response.json();
      console.log(json);

      let newNotes = JSON.parse(JSON.stringify(notes));
      //Logic to edit in client.
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if(element._id === id) {
          newNotes[index].title = title
          newNotes[index].description = description
          newNotes[index].tag = tag
          break;
        }
      }
      setNotes(newNotes);
    }
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;