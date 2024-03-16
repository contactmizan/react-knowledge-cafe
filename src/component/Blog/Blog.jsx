import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
//9 receive handleAddToBookmark
const Blog = ({ blog, handleAddToBookmark, handlemarkAsRead }) => {
    //4. destructure
    const { title, cover, author, posted_date, author_img, reading_time, hashtags } = blog;
    return (
        <div className='mb-20 border-b-2'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-6'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    {/* 10. button diye blog ka pathano */}
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p className='mb-4'>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a>#{hash}</a> </span>)
                }
            </p>
            <button onClick={() => handlemarkAsRead(reading_time)} className='mb-4 text-purple-800 font-bold underline'>Mark as read</button>
        </div>
    );
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handlemarkAsRead: PropTypes.func

}

export default Blog;