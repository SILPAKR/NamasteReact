import React from "react";
import ReactDOM from "react-dom/client";
const Heading = () => <h1>Namste React</h1>;
const elem = <h1>element</h1>;
const HeadingComponent = () => (
  <div id="container">
    {elem}
    <Heading />
    {Heading()}
    <Heading></Heading>

    {/* this is component compilation */}
    <h1>Namaste react by functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
