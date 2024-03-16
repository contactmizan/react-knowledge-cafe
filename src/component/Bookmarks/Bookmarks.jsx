import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
// 13. destructuring bookmarks
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 p-4 mt-2 rounded-xl">
      <div>
        <h3 className='text-4xl text-[#6047EC] border-2 border-[#6047EC] p-2 mb-4 rounded-xl'>Spent time on read: {readingTime}</h3>
      </div>
      <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>
      {/* 15. create dynamic bookmark to set individual */}

      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
}
export default Bookmarks;