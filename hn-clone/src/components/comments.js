import React, {useState, useEffect} from "react"
import Story from "./story"
import Comment from "./comment"

const Comments = (props) => {
  console.log("props in comments", props)
  console.log("inside comments")

  const story = props.story

  function urlToStub(url) {
    if(url !== undefined) {
      return (new URL(url).hostname)
    }
  }

  return (
    <div>
      <div>
        <div>
          <p>{story.title}</p>
          <p>({urlToStub(story.url)})</p>
        </div>
        <div>
          <p>{story.score} points by {story.by}</p>
        </div>
      </div>
      {props.story.kids.map((kid, index) => {     
          return (
            <Comment
              key = {kid}
              kid = {kid}
              index = {index}
              />
          )
        })}
    </div>
  );
}
export default Comments;