import React, {useState, useEffect} from "react"
import axios from "axios"

const Articles = (props) => {


  // function articleMap() {
  //     return (<div>
  //       {props.stories.map((story) => (
          
  //           <p>Hello, {story.id} from {story.url}!</p>
  //       ))}
  //       </div>);


  // }

  // console.log("stories", props.stories)
  // console.log("length", props.stories.length)
  return (
    <div>
      {props.stories.map((story) => {
        
        // console.log(story)
        return (
          <p key={story.id}>{story.url}</p>

        )
      }
    )}
    </div>);      


}
export default Articles;



 