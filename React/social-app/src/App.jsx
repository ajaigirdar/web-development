import { useState } from 'react';
import './App.css';

export default function App() {
  // state to manage posts
  const [posts, setposts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const date = new Date().toLocaleDateString();

  // function to add a post

  const addPost = () => {

    // checking if it's an empty post
    if (newPost.trim() === "") return;

    // setting the new post date, text and adding it to the other posts (updating the posts array)
    setposts([{id: Date.now(), date, text: newPost}, ...posts]);
    
    // setting new posts to its original state
    setNewPost("")
  }

  return (
    <div>
      <h1>Simple Social Media App</h1>
      <textarea
        rows='3'
        placeholder='Write something...'
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <br />
      <button onClick={addPost}>
        Add Post
      </button>

      {/* Display Posts */}

      <div>
        {posts.length === 0 ? <p>No posts to show.</p> : null}
        {posts.map((post) => (
          <div key={post.id} className='posts-div'>
          <p><strong>Posted on:</strong> {post.date}</p>
          <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

