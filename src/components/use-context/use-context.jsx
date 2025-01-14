import React, { createContext, useContext } from "react";
const userContext = createContext(null);

function ContextDemo() {
  return (
    <userContext.Provider value={"John"}>
      <div className="bg-dark text-light p-3">
        <h1>contextDemo component</h1>
        <Child1 />
      </div>
    </userContext.Provider>
  );
}

function Child1() {
  const data = useContext(userContext);
  return (
    <div className="bg-warning p-3">
      <h2>Child 1 component {data}</h2>
      <Child2 />
    </div>
  );
}

function Child2() {
  const data = useContext(userContext);
  return (
    <div className="bg-danger">
      <h2>Child 2 component {data}</h2>
    </div>
  );
}
export default ContextDemo;
