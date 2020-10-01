import React, {useState, useEffect} from "react"
import axios from "axios";
import img from "./images/equilateral-triangle-png-triangles-are-made-to-order.png"


const Comment = (props) => {

  const [comment, setComment] = useState({})
    axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${props.kid}.json?print=pretty`)
      .then(res => {
        setComment(res)
      })
      .catch(err => console.log(err));


  console.log("comment", comment)
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
  
  if (comment && comment.data) {
    const decodedText = decodeURIComponent(comment.data.text)

    return (
      <div className="comment">
        <div className="name_and_time">
          <img src={img} alt="upward triangle" className="arrow"/>
          <p className="name_and_time_one">{comment.data.by}</p>
          <p>{timeFromCreation(comment.data.time)}</p>
        </div>
        <div 
          className="innerHTML" 
          dangerouslySetInnerHTML={{ __html: decodedText }}/>
        </div>

    )
  } else {
    return (
      <div>
      </div>
    )
  }  
}
export default Comment;