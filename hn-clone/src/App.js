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
  const [more, setMore] = useState(0)

  console.log("app level story", story)

  useEffect(() => {
    console.log("useEffect fetching Data")
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((result) => {
        const bottomRange=more*30
        const topRange=(more+1)*30
        const resultSlice = result.data.slice(bottomRange,topRange)
        Promise.all(resultSlice.map((curData) => {
          return axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${curData}.json?print=pretty`)
        })).then((values) => {
          setStories(values.map((value) => value.data));
        })
      })
      .catch(err => setError("THERES AN ERROR!"));
  }, [more] );

  return (
    <div>
      <Header
        stories = {stories} error = {error} setError = {setError}/>
      <Route exact path="/" 
        render={props => <Articles 
          {...props} 
          stories={stories} 
          error={error} 
          setStory={setStory} 
          setMore={setMore} 
          more={more}/>}
      />
      <Route
        path="/comments/:id"
        render={() => {
          return (<Comments story={story}/>)
        }}
      />
    </div>
  );
}

export default App;
