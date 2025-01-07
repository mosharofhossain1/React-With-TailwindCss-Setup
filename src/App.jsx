
import { useState } from 'react'
import './App.css'
import FakeDataLoad from './components/FakeDataLoad/FakeDataLoad'
import Posts from './components/Posts/Posts'
import ServerArea from './components/ServerArea/ServerArea'

function App() {

  const [post, setPost] = useState([]);

  const addToPost = (recivePost) => {
    const newPost = [...post, recivePost];
    setPost(newPost)

  }

  return (
    <div>
      <FakeDataLoad></FakeDataLoad>
      <div className='flex gap-x-9'>
        <Posts addToPost={addToPost}></Posts>
        <ServerArea post={post}></ServerArea>
      </div>
    </div>
  )
}

export default App
