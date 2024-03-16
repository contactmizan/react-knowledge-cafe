// import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  // 6. bookmarks set
  const [bookmarks, setBookmrks] = useState([]);
  //  16. set reading time
  const [readingTime, setReadingTime] = useState(0)

  const handlemarkAsRead = (id, time) => {
    // console.log('marking as read', time);
    setReadingTime(readingTime + time);
    // 17. remove the read blog from bookmark
    console.log('remove bookmark id', id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmrks(remainingBookmarks);
  }
  //7.
  const handleAddToBookmark = blog => {
    // console.log(blog);
    // 11. copy and set into array
    const newBookmarks = [...bookmarks, blog];
    setBookmrks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      {/* 3.jehutu 2 ta flex korte hobe tai div er moddhe neya hoiche */}
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handlemarkAsRead={handlemarkAsRead}></Blogs>

        {/* 12. bookmarks ka pathano */}
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
