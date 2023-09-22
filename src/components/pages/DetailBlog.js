import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { Navigate } from "react-router-dom";

const DetailBlog = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const {
        data : blogs,
        loading,
        error
    } = useFetch("http://localhost:8000/blogs/" + id)

    const handleDelete = async(blog_id) => {
       try {
        const res = await axios.delete("http://localhost:8000/blogs/" + blog_id)
        navigate("/")
    
       } catch (error) {
        console.log(error)
       }
    }

    return ( 
        <div className="container mt-5">
            <h2 className='text-danger'>Detail Blog ke-{id}</h2>
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
                    <div>
                        <h3 className='mt-4'>{blogs.title}</h3>
                        <p className='fst-italic'>{blogs.author}</p>
                        <p>{blogs.body}</p>
                        <button onClick={() => handleDelete(blogs.id)} className="btn btn-danger mt-4">Delete blog</button>
                    </div>
                )
                }
        </div>
    );
}

export default DetailBlog;