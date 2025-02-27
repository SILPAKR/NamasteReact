import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Did mount");
  }
  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About us page</h1>
        <div>
          Logged User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"first"} location={"Kerala Class"} />
      </div>
    );
  }
}

export default About;
