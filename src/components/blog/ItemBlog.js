
const ItemBlog = ({data, hapus}) => {
        
    return ( 
        <div>
            {data.map((blog, index) => (
                <div key={blog.id} className='card p-3  mb-2'>
                <h3>{blog.title}</h3>
                <p><i>posted by {blog.author}</i></p>
                <p>{blog.body.slice(0, 47)}</p>
                <button className="btn btn-danger col-2" onClick={() => hapus(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
export default ItemBlog;