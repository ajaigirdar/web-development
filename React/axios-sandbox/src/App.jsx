import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
      setData(response.data);
    })

    .catch((error) => {
      console.error("error fetching data:", error)
    });
  }, []);

  return (
    <div>
      <h1>Axios Example</h1>

      {/* check if data eists before rendering */}
      {data ? (
        <div>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
