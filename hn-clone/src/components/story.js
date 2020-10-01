import React from "react"
import { Route, Link } from "react-router-dom"
import Comments from "./comments"
import triangle from "/Users/lauradaugherty/LambdaX/hn-clone/hn-clone/src/components/images/equilateral-triangle-png-triangles-are-made-to-order.png"

const Story = (props) => {
  const story = props.story
  const index = props.index
  const setStory = props.setStory
  console.log(story)

  function timeFromCreation(time) {
    //gets today's date in unix time to match story.time
    var todaysDate = Math.round((new Date()).getTime() / 1000)
    var dif = (todaysDate - time)
    //hours since creation
    var hours = Math.floor((dif/60)/60)
    if (hours === 1) {
      return (
        <div>{hours} hour ago</div>
      )
    } else {
      return (
        <div>{hours} hours ago</div>
      )
    }
  }

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
        <p className="index">{index}.</p>
        <img src={triangle} alt="upward arrow" className="arrow"/>

        <a  className="storyTitle"key={story.id} href={story.url}>{story.title}</a>
        <p className="storyLink">({urlToStub(story.url)})</p>
      </div>
      <div className="story_second_line">
        <p className="second_line_child_one">{story.score} points by {story.by}</p>
        <p className="second_line_child">{timeFromCreation(story.time)}</p>
        <button className="commentsButton" onClick = {() => {setStoryProp()}}>
          <Link to={`/comments/${story.id}`}>
            Comments
          </Link>
        </button>
      </div>
    </div>
  );      


}
export default Story;
    