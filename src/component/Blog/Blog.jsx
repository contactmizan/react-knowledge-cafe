import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    //4. destructure
    const { title, cover, author, posted_date, author_img, reading_time, hashtags } = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a>#{hash}</a> </span>)
                }
            </p>
        </div>
    );
}

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;