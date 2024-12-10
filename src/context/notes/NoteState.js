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
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;