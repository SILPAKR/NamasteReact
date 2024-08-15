// const heading = React.createElement(
//   "h1",
//   { id: "title", xyz: "abc" },
//   "Hello React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "this h1 Tag"),
        React.createElement("h1", {}, "this h1 Tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "this h1 Tag"),
        React.createElement("h1", {}, "this h1 Tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=indexreact.7c0ccee6.js.map
