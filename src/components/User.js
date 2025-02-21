import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h1>count:{count}</h1>
      <h1>Name:{name}</h1>
      <h2>Location:{location}</h2>
      <h3>@silpakr</h3>
    </div>
  );
};
export default User;
