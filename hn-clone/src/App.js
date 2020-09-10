import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [curStory, setCurStory] = useState("");


  useEffect(() => {
    console.log("useEffect fetching Data")
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(result => setData(result.data))
      .catch(err => setError("THERES AN ERROR!"));
  }, [] );
    console.log("data", data)

  // function displayData() {
  //       let i
  //       for (i = 0; i<data.length; i++) {
  //         let curData = data[i]
  //         console.log("fetching ind articles")
  //         axios
  //           .get(`https://hacker-news.firebaseio.com/v0/${curData}.json?print=pretty`)
  //           .then(result => console.log("result", result))
  //           .catch(err => setError("THERES AN ERROR!"));
  //       }
  //       console.log("curStory", curStory)
  //   }

  

  return (
    <div>
      {displayData()}
      {error}
    </div>
  );
}

export default App;
