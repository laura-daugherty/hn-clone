import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';
import Header from './components/header';
import Articles from './components/articles';

function App() {
  const [error, setError] = useState("");
  const [stories, setStories] = useState([]);

  useEffect(() => {
    console.log("useEffect fetching Data")
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((result) => {
        console.log("inside .then")
        console.log("result", result.data)
        console.log("result length", result.data.length)
        Promise.all(result.data.map((curData) => {
          console.log("fetching ind articles")
          return axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${curData}.json?print=pretty`)
            // .then((result) => {
            //   console.log("inside result.data", result.data)
            //   stories.push(result.data)
            //   setStories(stories)
            //   // console.log("stories", stories)
            // })
            // .catch(err => setError("THERES AN ERROR!")); 
        })).then((values) => {
          console.log("hello")
          console.log(values);
          setStories(values.map((value) => value.data));
        })

        // let i = 0
        // for (i = 0; i<result.data.length; i++) {
          
        //   let curData = result.data[i]

        // }
      })
      .catch(err => setError("THERES AN ERROR!"));
  }, [] );
    console.log("stories", stories)
    console.log("story length", stories.length)

  return (
    <div>
      <Header
       stories = {stories} error = {error} setError = {setError}/>
      <Articles
       stories = {stories} error = {error} /> 
    </div>
  );
}

export default App;
