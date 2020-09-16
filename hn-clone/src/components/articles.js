import React, {useState, useEffect} from "react"
import Story from "./story"
const Articles = (props) => {

  return (
    <div>
      <div className="stories_container">
        {props.stories.map((story, index) => {     
          return (
            <Story
              key = {story.id}
              story = {story}
              index = {index}
              setStory = {props.setStory}
              />
          )
        })}
        
      </div>

    </div>);      


}
export default Articles;



 