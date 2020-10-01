import React, {useState, useEffect} from "react"
import Story from "./story"
import img from "./images/equilateral-triangle-png-triangles-are-made-to-order.png"
import Comment from "./comment"

const Comments = (props) => {
  console.log("props in comments", props)
  console.log("inside comments")
  const [comment, setComment] = useState({
    comment: ""
  });

  const handleChange = event => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };
  const story = props.story

  function timeFromCreation(time) {
    var todaysDate = Math.round((new Date()).getTime() / 1000)
    var dif = (todaysDate - time)
    var hours = Math.floor((dif/60)/60)
    if (hours === 1) {
      return (
        <p>{hours} hour ago</p>
      )
    } else {
      return (
        <p>{hours} hours ago</p>
      )
    }
  }


  function urlToStub(url) {
    if(url !== undefined) {
      return (new URL(url).hostname)
    }
  }

  return (
    <div className="comments_wrapper">
      <div>
        <div className="comments_first_line">
        <img src={img} alt="upward arrow" className="arrow"/>
          <p>{story.title}</p>
          <p className="stub">({urlToStub(story.url)})</p>
        </div>
        <div className="comments_second_line">
          <p className="comments_second_line_first">{story.score} points by {story.by} </p>
          <p className="comments_second_line_p">{timeFromCreation(story.time)}</p>
          <p className="comments_second_line_p">hide</p>
          <p className="comments_second_line_p">past</p>
          <p className="comments_second_line_p">favorite</p>
          <p className="comments_second_line_p">comments</p>
        </div>
        <div className="comment_div">
          <textarea
              className="comment_input"
              name="comment"
              cols="60"
              rows="6"
              onChange={handleChange}
          />
          <button className="comment_button">
            add comment
          </button>
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