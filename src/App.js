import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route exact path='/home' element={<NoteState><Home/></NoteState>}></Route>
            <Route exact path='/about' element={<NoteState><About/></NoteState>}></Route>
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
