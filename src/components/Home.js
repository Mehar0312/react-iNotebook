import React, { useContext } from 'react'
import Notes from './Notes';

function Home() {
  return (
    <div className='container mx-100'>
        <h1 className='text-center'>This is iNotebook</h1>
        <h2 className='container'>Add Note</h2>
        <div className="container mb-3 mx-10">
            <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Title</label>
            <input className="form-control" type="text" placeholder="" aria-label=".form-control-lg example"/>
            </div>

        <div className="container mb-3 mx-10">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <Notes/>
    </div>
  )
}

export default Home
