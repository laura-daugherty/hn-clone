import React, {useState, useEffect} from "react"
import Story from "./story"
const Articles = (props) => {
  let index=props.more*30

  function setMore() {
    let more = props.more
    props.setMore(more += 1)
    console.log("newMore", props.more)
  }
  return (
    <div className="stories_container">
      <div >
        {props.stories.map((story) => { 
          index += 1
          return (
            <Story
              key = {story.id}
              story = {story}
              index = {index}
              setStory = {props.setStory}
              more = {props.more}
              />
          )
        })}
        
      </div>
      <button onClick = {() => {setMore()}}>
        More
      </button>

    </div>);      


}
export default Articles;



 