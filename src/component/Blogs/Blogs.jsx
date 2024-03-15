import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    //1. load data from json
    const [blogs, setBlogs] = useState([]);
    //2. data load er jonno 
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {/* 5. dekhanor jonno dynamic */}
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
}

export default Blogs;