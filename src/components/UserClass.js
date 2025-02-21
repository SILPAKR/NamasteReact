import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "dummy",
        id: "default",
      },
    };
    console.log(this.props.name + "constructor");
    // console.log("child constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name + "child mount");
    const data = await fetch("https://api.github.com/users/SILPAKR");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will umamount");
  }
  render() {
    // console.log(this.props.name + "render");
    // console.log("child render");

    const { login, id, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Name :{login}</h1>
        <h2>Id:{id}</h2>;<h3>@silpakr</h3>
      </div>
    );
  }
}
export default UserClass;
