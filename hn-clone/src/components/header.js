import React from "react"

const Header = (props) => {

  if (!props.data) {
    return (
      <header 
      className="ui block header"
      style={ {
          display: "flex"
      } }
    >
      <div
        style={ {
          display: "flex",
          flexDirection: "column",
          marginLeft: "30px"
        } }
      >
        <h1 
          className="ui left aligned header"
          style={ {
            marginBottom: "0px",
          }}
        >
          Hacker News
        </h1>
        <h2
          className="ui left aligned header"
        >
          Fetching your Articles
        </h2>
        
      </div>
    </header>
    )
  } else {

    return (
      <header 
        className="ui block header"
        style={ {
            display: "flex"
        } }
      >
        <div
          style={ {
            display: "flex",
            flexDirection: "column",
            marginLeft: "30px"
          } }
        >
          <h1 
            className="ui left aligned header"
            style={ {
              marginBottom: "0px",
            }}
          >
            Hacker News
          </h1>
          
        </div>
      </header>
    )
  }
}

export default Header;