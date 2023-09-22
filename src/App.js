import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import AddBlog from './components/pages/AddBlog';
import DetailBlog from './components/pages/DetailBlog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    let judul = 'Ferdian Blog'

    return (
      <BrowserRouter>
        <div>
            <Navbar title={judul} />

            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/add' element={<AddBlog/>}/>
              <Route path='/blog/:id' element={<DetailBlog />} />
            </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;
