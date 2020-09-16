import React, {useState, useEffect} from 'react';
import { Route } from "react-router-dom";
import axios from "axios";
import './App.css';
import Header from './components/header';
import Articles from './components/articles';
import Comments from './components/comments'

function App() {
  const [error, setError] = useState("");
  const [stories, setStories] = useState([]);
  const [story, setStory] = useState({})

  console.log("app level story", story)

  useEffect(() => {
    console.log("useEffect fetching Data")
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((result) => {
        Promise.all(result.data.map((curData) => {
          return axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${curData}.json?print=pretty`)
        })).then((values) => {
          setStories(values.map((value) => value.data));
        })
      })
      .catch(err => setError("THERES AN ERROR!"));
  }, [] );

  return (
    <div>
      <Header
        stories = {stories} error = {error} setError = {setError}/>
      <Route exact path="/" 
        render={props => <Articles {...props} stories={stories} error={error} setStory={setStory}/>}
      />
      <Route
        path="/comments/:id"
        render={() => {
          console.log("inside render")
          return (<Comments story={story}/>)
        }}
      />
    </div>
  );
}

export default App;
