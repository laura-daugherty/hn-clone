import React from "react"
import { Route, Link } from "react-router-dom"
import Comments from "./comments"
const Story = (props) => {
  const story = props.story
  const index = props.index + 1
  const setStory = props.setStory
  console.log(story)



  function urlToStub(url) {
    if(url !== undefined) {
      console.log(url)
      return (new URL(url).hostname)
    }
  }

  function setStoryProp() {
    console.log("setting story")
    setStory(story)
  }

  console.log("kids", story.kids)
  return (
    <div className="stories_container">
      <div className="story_first_line">
        <p>{index}.</p>
        <button>
          ^
        </button>
        <a key={story.id} href={story.url}>{story.title}</a>
        <p>({urlToStub(story.url)})</p>
      </div>
      <div className="story_second_line">
        <p>{story.score} points by {story.by}</p>
      <button onClick = {() => {setStoryProp()}}>
        <Link to={`/comments/${story.id}`}>
          Comments
        </Link>
      </button>



      </div>

    </div>
  );      


}
export default Story;
    