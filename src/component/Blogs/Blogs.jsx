import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

//8. set handleAddToBookmar props to set the bookmarks into blogs function as a property
const Blogs = ({handleAddToBookmark, handlemarkAsRead}) => {
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
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark} handlemarkAsRead={handlemarkAsRead}></Blog>)
            }
        </div>
    );
}

Blogs.propTypes={
    handleAddToBookmark: PropTypes.func,
    handlemarkAsRead: PropTypes.func
}

export default Blogs;