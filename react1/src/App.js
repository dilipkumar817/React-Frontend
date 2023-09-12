import Home from './components/Home';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import DeleteTask from './components/DeleteTask';
import DisplayTask from './components/DisplayTask';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div id='home'>
      <BrowserRouter>

        <Link id='a' to='/' >HOME</Link>
        <Link id='b' to='/addtask' >ADD TASK</Link>
        <Link id='c' to='/displaytask' >DISPLAY TASK</Link>
        <Link id='d' to='/edittask' >UPDATE TASK</Link>
        <Link id='e' to='/deletetask' >DELETE TASK</Link>



        <Routes>
          <Route path='/addtask' element={<AddTask />}></Route>
          <Route path='/displaytask' element={<DisplayTask />}></Route>
          <Route path='/edittask' element={<EditTask />}></Route>
          <Route path='/deletetask' element={<DeleteTask />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App;