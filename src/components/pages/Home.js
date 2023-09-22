import useFetch from "../../hooks/useFetch"
import ItemBlog from '../blog/ItemBlog'

const Home = () => {
    const {
        data : blogs, 
        loading, 
        error
        } = useFetch ("http://localhost:8000/blogs")
        
    return ( 
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
                <ItemBlog blogs = {blogs} />
            )
            }
        </div>
        );
}
export default Home;