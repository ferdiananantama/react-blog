import { useState,useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemBlog from './components/blog/ItemBlog';
import axios from 'axios';

function App() {
    let judul = 'Ferdian Blog'

    const [blogs, setBlogs] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    
    const handleDelete = (id) => {
      const newBlog = blogs.filter((x) => x.id !== id)
      setBlogs(newBlog);
    }

    useEffect (() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:8000/blogs")
          console.log(response.data);
          setBlogs(response.data);
          setLoading(false);
          setError(false);
        } catch (error) {
          console.log(error)
          setError(true);
          setLoading(false);
        }
      } 
      setTimeout(()=> {
        fetchData();
      }, 2000)
    },[])

    return (
      <div>
        <Navbar title={judul} />
        <div className="container mt-5">
        <h2 className='text-danger mb-3'>
        Blog Ferdian
        </h2>
        {
          error&&(
            <h2 className='text-danger'>
              Eror When Get Data
            </h2>
          )
        }
        {
          loading&&(
          <h2>
            Loading...
          </h2>
          )
        }
        {
          blogs && (
            <ItemBlog data = {blogs} hapus={handleDelete} />
          )
        }
      </div>
      </div>
    );
}

export default App;
