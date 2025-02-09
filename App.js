import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => (
  <h1 className="heading" tabIndex="5">
    This is jsx
  </h1>
);
const data = 1000;
const title = <h1>title</h1>;
const HeadingComponent = () => (
  <div id="container">
    <h1>component</h1>
    {title}
    <Title />
    <Title></Title>
    {Title()}
    <h1> {data}</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
