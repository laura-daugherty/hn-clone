import React from "react"
import img from "/Users/lauradaugherty/LambdaX/hn-clone/hn-clone/src/components/images/1200px-Y_Combinator_logo.svg.png"

const Header = (props) => {

  if (!props.stories) {
    return (
      <header>
      <div>
        <h1>
          Hacker News
        </h1>
        <h2>
          Fetching your Articles
        </h2>
      </div>
    </header>
    )
  } else {

    return (
      <header>
        <div className="left_aligned_header">
        <img src={img} alt="Y Combinator Logo" className="logo_img"/>
          <h1>
            Hacker News
          </h1>
          <ul>
            <li>new</li>
            <li>past</li>
            <li>comments</li>
            <li>ask</li>
            <li>show</li>
            <li>jobs</li>
            <li>submit</li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;