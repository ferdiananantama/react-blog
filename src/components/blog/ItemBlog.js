import { Link } from "react-router-dom";

const ItemBlog = ({blogs, hapus}) => {
        
    return ( 
        <div>
            {blogs.map((blog, index) => (
                <Link to={"/blog/" + blog.id} key={blog.id} className='card card-blog p-3  mb-2 text-decoration-none'>
                <h3>{blog.title}</h3>
                <p><i>posted by {blog.author}</i></p>
                <p>{blog.body.slice(0, 47)}</p>
                </Link>
            ))}
        </div>
    );
}
export default ItemBlog;