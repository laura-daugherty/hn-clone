import React, {useState, useEffect} from "react"
import axios from "axios";

const Comment = (props) => {

  const [comment, setComment] = useState({})
    axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${props.kid}.json?print=pretty`)
      .then(res => {
        setComment(res)
      })
      .catch(err => console.log(err));


  console.log("comment", comment)

  // return (
  //   // display()
  //   <div>
  //     comment
  //     {comment.data.text}
  //   </div>
  // );      

  function display() {
    if (comment && comment.data) {
      return (
        <div>
          <div>
            {comment.data.text}

          </div>
        </div>

      )
    } else {
      return (
        <div>
          Fetching comments
        </div>
      )
    }
  }  

  return (
    <div>
      <div>{display()}</div>
    </div>

  )
}
export default Comment;