import { useEffect, useState } from "react";


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
        <div>

        </div>
    );
}

export default Blogs;