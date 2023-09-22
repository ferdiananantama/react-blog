import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
    const AddBlog = () => {

        const [title, setTitle] = useState('');
        const [body, setBody] = useState('');
        const [author, setAuthor] = useState('ferdian');
        const navigate = useNavigate();

        const handleSubmit = async(e) => {
            e.preventDefault();
            const blog = {title, body, author}

            // console.log(blog);
            try {
                const res = await axios.post("http://localhost:8000/blogs",
                JSON.stringify(blog),
                {
                    headers : {"Content-Type" : "application/json"}
                }
                )

                navigate('/')
            } catch (error) {
                console.log("Error")
            }

        }

        return ( 
                <div  className="container mt-5">
                    <h2 className="text-danger">
                        Tambah Blog
                    </h2>
                    <div className="mt-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                                <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Body</label>
                                <textarea onChange={(e) => setBody(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => setAuthor(e.target.value)}>
                                <option value="1">Ferdian</option>
                                <option value="2">Estu</option>
                                <option value="3">Anantama</option>
                                <option value="3">Anis Santika</option>
                            </select>
                            <button className="btn btn-danger mt-4 px-4">Simpan</button>
                        </form>
                    </div>
                </div>
        );
    }
    
    export default AddBlog;